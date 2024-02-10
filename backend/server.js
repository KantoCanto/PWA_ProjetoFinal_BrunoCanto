import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {connectDB} from './config/db.js';


dotenv.config();

//.env
const PORT = process.env.PORT || 5000;

const app = express();

//middleware
app.use(cors());
app.use(express.json());

//connectDB
connectDB();


//routes
app.get("/", (req,res) => {
    res.send("API is running :)")
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});