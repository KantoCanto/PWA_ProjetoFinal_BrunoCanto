import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        unique: true,
        trim: true,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    isAdmin:{
        type: Boolean,
        default: false,
    },
    likedGames:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Game',
        }
    ]
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("User", UserSchema);

