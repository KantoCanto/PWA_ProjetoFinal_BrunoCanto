import User from "../Models/UserModel.js";
import asyncHandler from "../middlewares/AsyncHandler.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../middlewares/Auth.js";


// ---- PUBLIC CONTROLLERS ----

// @desc register user
// @route POST /api/users/
// @access Public

const registerUser = asyncHandler(async (req, res) => {
    const {username, email, password} = req.body;

    try{
        //check if user exists in the db
        const userExists = await User.findOne({email});
        if(userExists){
            res.status(400);
            throw new Error("User already exists");
        }

        //if user does not exist
        //---> first hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //---> create a new user in DB
        const user = await User.create({
            username,
            email,
            password: hashedPassword
        })

        // if user created successfully send user data AND TOKEN to client
        if(user){
            res.status(201).json({
                _id: user._id,
                username: user.username,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user._id)
            })
        } else{
            res.status(400);
            throw new Error("Invalid user data")
        }
        
    } catch(error){
        res.status(400).json({
            message: error.message
        })
    }
})

// @desc login user
// @route POST /api/users/login
// @access Public

const loginUser = asyncHandler(async (req, res) => {
    //get email and password from the form input
    const {email, password} = req.body;

    try{
        //check if user exists in the db
        const user = await User.findOne({email})
        if(!user){
            res.status(400);
            throw new Error("No user found with this email")
        }
        //if user exists compare password with hashed password then send user data and token to client
        if(user && (await bcrypt.compare(password, user.password))){
            res.json({
                _id: user._id,
                username: user.username,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user._id)
            })
            //if user not found or password is incorrect send error message  
        }else{
            res.status(401);
            throw new Error("Invalid email or password")
        }
    }catch(error){
        res.status(400).json({
            message: error.message
        })
    }
})

// ---- PRIVATE CONTROLLERS ----

// @desc UPDATE user profile
// @route PUT /api/users/profile
// @access Private

const updateUserProfile = asyncHandler( async (req, res) => {
    const{username, email} = req.body;

    try{
        //find user in db
        const user = await User.findById(req.user._id);
        //if user exists update user data and save it in DB
        if(user){
            user.username = username || user.username;
            user.email = email || user.email;

            const updateUser = await user.save();

            //send updated user data and token to client
            res.json({
                _id: updateUser._id,
                username: updateUser.username,
                email: updateUser.email,
                isAdmin: updateUser.isAdmin,
                token: generateToken(updateUser._id)
            })
            //else send error message
        }else{
            res.status(404);
            throw new Error("User not found")
        }
    }catch(error){
        res.status(400).json({
            message: error.message
        })
    }
})

// @desc Delete user profile
// @route DELETE /api/users
// @access Private

const deleteUserProfile = asyncHandler( async (req, res) => {
    
    try{
        //find user in db
        const user = await User.findById(req.user._id);

        //if user exists, remove from DB
        if(user){
            //if user is ADMIN, throw error message
            if(user.isAdmin){
                res.status(400);
                throw new Error("Admin cannot be deleted")
            }
            //else delete user from DB
            await User.deleteOne({_id: req.user._id});
            res.json({
                message: "User removed Successfully"
            })
        }else{
           res.status(404);
           throw new Error("User not found");
        }
    }catch(error){
        res.status(400).json({
            message: error.message
        })
    }
    

})

// @desc  Change user password
// @route PUT /api/users/changePassword
// @access Private

const changeUserPassword = asyncHandler ( async (req, res) => {
    const{oldPassword, newPassword} = req.body;

    try{
        //find user in db
        const user = await User.findById(req.user._id);
        //if user exists, compare old password with an hashed password, then update the user password and save it to the DB
        if(user && (await bcrypt.compare(oldPassword, user.password))){
            //hash the new password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(newPassword, salt);
            user.password = hashedPassword;
            await user.save();
            res.json({
                message: "Password changed Successfully"
            })
            //else send an error message
        }else{
            res.status(400);
            throw new Error("Invalid Old Password")
        }
    }catch(error){
        res.status(400).json({
            message: error.message
        })
    }
})

// @desc Get user liked games
// @route GET /api/users/likedGames
// @access Private

const getLikedGames = asyncHandler(async (req, res) => {
    try{
        //find user in db
        const user = await User.findById(req.user._id).populate("likedGames");

        //if user exists, send liked games to client
        if(user){
            res.json(user.likedGames)
            //else send an error message
        }else{
            res.status(404);
            throw new Error("User not found")
        }
    }catch(error){
        res.status(400).json({
            message: error.message
        })
    }
})


// @desc add a game to liked games
// @route PUT /api/users/likedGames
// @access Private

const addLikedGame = asyncHandler(async (req,res) => {
    const {gameId} = req.body;

    try{    
        //try to find user in the db
        const user = await User.findById(req.user._id);
        //if user exists, add game to liked games
        if(user){
            //check if the game is already in the liked games
            if(user.likedGames.includes(gameId)){
                res.status(400);
                throw new Error("Game is already liked")
            }
            user.likedGames.push(gameId);
            await user.save();
            res.json(user.likedGames)
            //else send an error message
        }else{
            res.status(404);
            throw new Error("User not found")
        }
    }catch(error){
        res.status(400).json({
            message: error.message
        })
    
    }
})

// @desc remove all liked games
// @route DELETE /api/users/likedGames
// @access Private

const resetLikedGames = asyncHandler(async (req,res) => {

    const {gameId} = req.body;

    try{
        //try to find the user in the db
        const user = User.findById(req.user._id);

        //if the user exists, delete all liked games and save it in the db
        if(user){
            user.likedGames = [];
            await user.save();
            res.json({
                message: "Liked games reset successfully"
            })
            //else send an error message
        }else{
            res.status(404);
            throw new Error("User not found")
        }   
    }catch(error){
        res.status(400).json({
            message: error.message
        })
    }
})

// ---- ADMIN CONTROLLERS ----

// @desc Get all users
// @route GET /api/users
// @access Private/Admin

const getUsers = asyncHandler(async (req, res) => {
    try{
        //find all users in the db
        const users = await User.find({});
        //if users exist, send users to client
        if(users){
            res.json(users);
            //else send an error message
        }else{
            res.status(404);
            throw new Error("No users found")
        }
    }catch(error){
        res.status(400).json({
            message: error.message
        })
    }
})

// @desc Delete a specific user
// @route DELETE /api/users/:id
// @access Private/Admin

const deleteUser = asyncHandler(async (req, res) => {
    try{
        //find user in the db
        const user = await User.findById(req.params.id);
        //if user exists, delete user from db
        if(user){

            //if the user is an ADMIN throw an error message
            if(user.isAdmin){
                res.status(400);
                throw new Error("Admin cannot be deleted")
            }
            //else delete user from db
            await user.deleteOne();
            res.json({
                message: "User removed successfully"
            })
            //else send an error message
        }
        else{
            res.status(404);
            throw new Error("User not found")
        }
    }catch(error){
        res.status(400).json({
            message: error.message
        })
    }
});


export {registerUser, loginUser, updateUserProfile, deleteUserProfile, changeUserPassword, getLikedGames, addLikedGame, resetLikedGames, getUsers, deleteUser};