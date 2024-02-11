import asyncHandler from "../middlewares/AsyncHandler.js";
import Game from "../Models/GameModel.js";
import gameData from "../data/gameData.js";

// ---- PUBLIC CONTROLLERS ----


// @desc import games
// @route POST /api/games/import
// @access Public

const importGames = asyncHandler(async (req, res) => {
    //reset the existing games
    await Game.deleteMany({});

    const games = await Game.insertMany(gameData);

    res.status(201).json(games);

});


export {importGames};