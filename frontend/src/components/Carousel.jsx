import GameCard from "./GameCard";
import games from "../data/games.js";

export default function Carousel(){


    return(
        <div className="w-100 overflow-x-auto py-6">
            <div className="flex flex-row mx-6">
                {games.map((game) => (
                    <GameCard 
                        key={game.game_id} 
                        title={game.title} 
                        image={game.sample_cover.thumbnail_image} 
                        score={game.moby_score} 
                        description={game.description} 
                        year={game.platforms[0].first_release_date}/>   
                ))}
            </div>
        </div>
    )
}