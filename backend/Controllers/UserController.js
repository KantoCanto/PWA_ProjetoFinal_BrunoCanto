// @desc Register a new user
// @route POST /api/users/register
// @access Public

import User from "../Models/UserModel.js";
import asyncHandler from "../middlewares/AsyncHandler.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../middlewares/Auth.js";

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

export {registerUser, loginUser};