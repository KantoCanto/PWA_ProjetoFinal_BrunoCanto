import express from "express";
import { changeUserPassword, deleteUserProfile, loginUser, registerUser, updateUserProfile, getLikedGames, addLikedGame, resetLikedGames, getUsers, deleteUser } from "../Controllers/UserController.js";
import { protect, admin } from "../middlewares/Auth.js";

const router = express.Router();


// PUBLIC ROUTES

router.post("/", registerUser);
router.post("/login", loginUser);

// PRIVATE ROUTES

router.put("/", protect, updateUserProfile)
router.delete("/", protect, deleteUserProfile)
router.put("/changePassword", protect, changeUserPassword)
router.get("/likedGames", protect, getLikedGames)
router.post("/likedGames", protect, addLikedGame)
router.delete("/likedGames", protect, resetLikedGames)

// ADMIN ROUTES

router.get("/", protect, admin, getUsers)
router.delete("/:id", protect, admin, deleteUser)

export default router;