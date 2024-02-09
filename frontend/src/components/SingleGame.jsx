const game = 
    {
            "alternate_titles": [
                {
                    "description": "Finnish title",
                    "title": "Salaiset Kansiot"
                },
                {
                    "description": "PSX title",
                    "title": "The X Files"
                },
                {
                    "description": "Spanish title",
                    "title": "The X-Files: Expediente X - El Juego"
                },
                {
                    "description": "French title",
                    "title": "The X-Files: Le Jeu"
                }
            ],
            "description": "As an extension of one of the most long-running television series of all time, The X-Files, play through the eyes of Special Agent Craig Willmore, a new FBI field investigator brought in to locate missing agents Fox Mulder and Dana Scully whose last location was the Everett, Washington, area. In this \"movie quality\" video production, characters are played by the actors and actresses from the show, including Gillian Anderson (Scully) and David Duchovny (Mulder).As the game begins, you are given a briefing of your mission. Gather up all state-of-the-art spy tools (night vision goggles, a digital camera, PDA, lock picks, evidence kit, a standard issue revolver, handcuffs and badge) and then head out to follow their trail. As you explore the various locations, take photographs, pick up pieces of evidence and talk with people. Use your Newton PDA to access the navigational map, to make notes and send/receive e-mail. Trace telephone numbers, run background checks and license plate ids and even post an All Points Bulletin on missing persons using the computer network at your home or office. By using photo viewer software, download field photographs to the computer where they can be enlarged and studied more closely for clues.Features include emotion icons for interjecting different tones during conversations (mean, humorous or technical) which effect the answer given. An in-game hint system, Artificial Intelligence, can be set on or off. In addition, there are multiple endings as a direct result of actions you take.",
            "game_id": 1,
            "genres": [
                {
                    "genre_category": "Basic Genres",
                    "genre_category_id": 1,
                    "genre_id": 2,
                    "genre_name": "Adventure"
                },
                {
                    "genre_category": "Perspective",
                    "genre_category_id": 2,
                    "genre_id": 7,
                    "genre_name": "1st-person"
                },
                {
                    "genre_category": "Art Style",
                    "genre_category_id": 13,
                    "genre_id": 217,
                    "genre_name": "Live action"
                },
                {
                    "genre_category": "Setting",
                    "genre_category_id": 10,
                    "genre_id": 8,
                    "genre_name": "Sci-fi / futuristic"
                },
                {
                    "genre_category": "Narrative Theme/Topic",
                    "genre_category_id": 8,
                    "genre_id": 55,
                    "genre_name": "Detective / mystery"
                },
                {
                    "genre_category": "Other Attributes",
                    "genre_category_id": 6,
                    "genre_id": 82,
                    "genre_name": "Licensed"
                }
            ],
            "moby_score": 7.1,
            "moby_url": "https://www.mobygames.com/game/1/the-x-files-game/",
            "num_votes": 55,
            "official_url": null,
            "platforms": [
                {
                    "first_release_date": "1998",
                    "platform_id": 3,
                    "platform_name": "Windows"
                },
                {
                    "first_release_date": "1999",
                    "platform_id": 6,
                    "platform_name": "PlayStation"
                },
                {
                    "first_release_date": "1998-06",
                    "platform_id": 74,
                    "platform_name": "Macintosh"
                }
            ],
            "sample_cover": {
                "height": 800,
                "image": "https://cdn.mobygames.com/covers/4062982-the-x-files-game-windows-front-cover.jpg",
                "platforms": [
                    "Windows",
                    "Macintosh"
                ],
                "thumbnail_image": "https://cdn.mobygames.com/872aed6c-aba4-11ed-a188-02420a00019a.webp",
                "width": 690
            },
            "sample_screenshots": [
                {
                    "caption": "Title screen (from intro)",
                    "height": 480,
                    "image": "https://cdn.mobygames.com/screenshots/578912-the-x-files-game-windows-title-screen-from-intro.jpg",
                    "thumbnail_image": "https://cdn.mobygames.com/3f8ed472-ab6e-11ed-8ed2-02420a0001a0.webp",
                    "width": 640
                },
                {
                    "caption": "Agent Wilmore (that be you, the player) and Agent Mulder have just spotted a suspicious men coming out of a jeep in front of house.",
                    "height": 576,
                    "image": "https://cdn.mobygames.com/screenshots/10471115-the-x-files-game-playstation-agent-wilmore-that-be-you-the-playe.jpg",
                    "thumbnail_image": "https://cdn.mobygames.com/6b819702-ac10-11ed-833b-02420a000131.webp",
                    "width": 720
                },
                {
                    "caption": "Something fishy's going on, as you're entering the storage without a warrant.",
                    "height": 576,
                    "image": "https://cdn.mobygames.com/screenshots/10470763-the-x-files-game-playstation-something-fishys-going-on-as-youre-.jpg",
                    "thumbnail_image": "https://cdn.mobygames.com/6f46a896-ac10-11ed-803a-02420a000131.webp",
                    "width": 720
                },
                {
                    "caption": "Boat dock",
                    "height": 480,
                    "image": "https://cdn.mobygames.com/screenshots/11076046-the-x-files-game-windows-boat-dock.jpg",
                    "thumbnail_image": "https://cdn.mobygames.com/9a3b5ef2-ac15-11ed-b075-02420a00012f.webp",
                    "width": 640
                },
                {
                    "caption": "You own a nokia mobile phone.",
                    "height": 480,
                    "image": "https://cdn.mobygames.com/screenshots/11075551-the-x-files-game-windows-you-own-a-nokia-mobile-phone.jpg",
                    "thumbnail_image": "https://cdn.mobygames.com/988f5a90-ac15-11ed-81c5-02420a00012f.webp",
                    "width": 640
                }
            ],
            "title": "The X-Files Game"
}

export default function SingleGame(){


    return(
        /* image */
        <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center">
            <div className="flex flex-col gap-6 lg:w-1/4 px-6">
                <img src={game.sample_cover.image} className="w-full h-full aspect-square object-cover rounded-xl"/>
                <div className="flex flex-col">
                    <button className="bg-purple-200 rounded-xl py-1 mx-12 mb-2">Add to Play Later</button>
                    <button className="bg-orange-200 rounded-xl py-1 mx-12 mb-2">Rate</button>
                    <button className="bg-blue-200 rounded-xl py-1 mx-12 mb-2">Review</button>
                </div> 
            </div>
            {/* info */}
            <div className="flex flex-col gap-6 lg:w-3/4 px-6">
                <div>
                    <h1 className="text-3xl font-bold">{game.title}</h1>
                    <p className="text-md px-6 pt-6 text-justify">{game.description}</p>
                    <div className="flex py-6 justify-between">
                        <div>
                            <h2 className="text-xl font-bold">Genres</h2>
                            <ul className="list-disc pl-8">
                                {game.genres.map((genre, index) => <li key={index}>{genre.genre_name}</li>)}
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">Platforms</h2>
                            <ul className="list-disc pl-8 ">
                                {game.platforms.map((platform, index) => <li key={index}>{platform.platform_name}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}