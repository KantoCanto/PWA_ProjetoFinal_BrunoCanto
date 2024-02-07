

export default function GameCard(){
    return(
        <div>
            <div className="relative flex w-56 flex-col rounded-xl bg-purple-100 bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 mt-4 h-48 overflow-hidden rounded-xl bg-purple-200 bg-clip-border text-gray-700 shadow-lg">
                    <img className="object-cover w-full" alt="game-picture" />
                </div>
                <div className="p-4 text-center">
                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    Title
                    </h4>
                    <p className="block text-white bg-clip-text font-sans text-base font-bold leading-relaxed text-transparent antialiased">
                        Year
                    </p>
                </div>
            </div>
        </div>
    )
}