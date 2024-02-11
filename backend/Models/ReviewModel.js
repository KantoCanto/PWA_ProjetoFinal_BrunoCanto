import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
    {
        userId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        gameId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Game"
        },
        username:{
            type: String,
            required: true
        },
        reviewRating:{
            type: Number,
            required: true
        },
        reviewComment:{
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

export default mongoose.model("Review", reviewSchema);