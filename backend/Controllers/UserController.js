// @desc Register a new user
// @route POST /api/users/register
// @access Public

import User from "../Models/UserModel.js";


//async handler middleware - wraps an asynchronous route handler function, catches any errors that
//it throws, and apsses them to Express's error handling mechanism (next())
function asyncHandler(fn) {
    return function (req, res, next){
        return Promise
            .resolve(fn(req, res, next))
            .catch(next)
    }
}

const registerUser = asyncHandler(async (req, res) => {
    const {username, email, password} = req.body;

    try{
        //check if user exists in the db
        const userExists = await User.findOne({email});
        if(userExists){
            res.status(400);
            throw new Error("User already exists");
        }

        //if user does not exist, create a new user
        res.status(201).json({
            username, 
            email,
            password
        })

    } catch(error){
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
})


export {registerUser};