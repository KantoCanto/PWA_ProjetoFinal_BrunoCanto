export default function Footer(){
    return(
        

<footer className="rounded-t-md shadow w-full h-20 bg-purple-800 flex sticky bottom-0">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-white sm:text-center">© 2024 <a href="#" className="hover:underline">Kanto™</a>
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white sm:mt-0">
        <li>
            <a href="#" className="hover:underline me-4 md:me-6">About</a>
        </li>
        <li>
            <p>Data provided by MobyGames.com</p>
        </li>
    </ul>
    </div>
</footer>

    )
}


