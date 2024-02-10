import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {connectDB} from './config/db.js';
import userRouter from "./Routes/UserRouter.js";
import errorHandler from "./middlewares/ErrorMiddleware.js";


dotenv.config();

//.env
const PORT = process.env.PORT || 5000;

const app = express();

//middleware
app.use(cors());
app.use(express.json());

//connectDB
connectDB();


// MAIN Route
app.get("/", (req,res) => {
    res.send("API is running :)")
})

// OTHER Routes

// -------User Routes
app.use("/api/users", userRouter);

// ERROR HANDLING MIDDLEWARE
app.use(errorHandler);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});