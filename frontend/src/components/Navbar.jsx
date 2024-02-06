import { Search } from "lucide-react"

export default function Navbar(){

    return(
        
        <div className="w-full bg-purple-800 flex justify-between px-6 rounded-b-md">  
            <h1 className="text-2xl text-white font-bold bg-orange-500 my-6">TheGameLog.</h1>

{/* 
            <div className="flex items-center space-x-4">
                <h1 className="bg-neutral-200/25 text-white px-4 py-1 rounded-2xl">Register</h1>
                <h1 className="bg-neutral-200/10 px-4 text-white py-1 rounded-2xl"> Log In</h1>
            </div> */}

            <div className="flex items-center space-x-4">
                <div className= "flex bg-neutral-200/30 rounded-xl space-x-2">
                    <Search className="text-white m-1 p-0.5" />
                    <input className="rounded-2xl bg-transparent outline-none text-white" placeholder="Search">

                    </input>
                </div>
                

                <div className="w-10 h-10 border-2 border-orange-500 rounded-full"></div>
            </div>
            


        </div>
    )
}