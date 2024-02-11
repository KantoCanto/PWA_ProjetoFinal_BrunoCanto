import express from "express";
import { protect, admin } from "../middlewares/Auth.js";
import { importGames } from "../Controllers/GamesController.js";

const router = express.Router();


// PUBLIC ROUTES
router.post("/import", importGames)

// PRIVATE ROUTES



// ADMIN ROUTES



export default router;