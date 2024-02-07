import GameCard from "./GameCard";
import games from "../data/games.js";

export default function Carousel(){


    return(
        <div>
            <div className="flex flex-row mx-2">
                {games.map((game, index) => (
                    <GameCard key={index} game={game}/>   
                ))}
            </div>
        </div>
    )
}