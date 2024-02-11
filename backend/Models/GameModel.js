import mongoose from "mongoose";

const gameSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    gameName:{
        type: String,
        required: true
    },
    gameImage:{
        type: String,
        required: true
    },
    gameDescription:{
        type: String,
        required: true
    },
    gameGenres:[    
        {
            type: String,
            required: true
        }
    ],
    gamePlatforms:[
        {
            type: String,
            required: true
        }
    ],
 

},{
    timestamps: true
})

export default mongoose.model("Game", gameSchema);