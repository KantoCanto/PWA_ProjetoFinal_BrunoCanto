import {Link} from "react-router-dom";
import {BiUser} from "react-icons/bi";
import { MdOutlineMailOutline } from "react-icons/md";
import {BiLock} from "react-icons/bi"

export default function RegisterPage(){
     return(
        <div className="text-white h-[100vh] flex justify-center items-center bg-cover" style={{"backgroundImage": "url(./src/assets/register_background.jpg)"}}>  
            <main>
                <div className="bg-slate-800 bprder border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-xl bg-opacity-60 relative">
                <div className="text-4xl text-white font-bold text-center mb-6">Register</div>
                <form action="" className="flex flex-col">
                    <div className="relative my-6">
                        <label className="absolute text-white duration-300 transform -translate-y-8 scale-90 top-1 -z-10 origin-[0]">Username</label>
                        <input type="email" className="block w-72 py-0.5 px-4 text-sm bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:focus:border-blue-400 outline-none" placeholder="Your Username"/>
                        <BiUser className="absolute text-white top-1 right-2 mx-1"/>
                    </div>
                    <div className="relative my-6">
                        <label className="absolute text-white duration-300 transform -translate-y-8 scale-90 top-1 -z-10 origin-[0]">E-mail</label>
                        <input type="email" className="block w-72 py-0.5 px-4 text-sm bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:focus:border-blue-400 outline-none" placeholder="Email@mail.com"/>
                        <MdOutlineMailOutline className="absolute text-white top-1 right-2 mx-1"/>
                    </div>
                    <div className="relative my-4">
                        <label className="absolute text-white duration-300 transform -translate-y-8 scale-90 top-1 -z-10 origin-[0]">Password</label>
                        <input type="password" className="block w-72 py-0.5 px-4 text-sm bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:focus:border-blue-400 outline-none" placeholder="Password"/>
                        <BiLock className="absolute text-white top-1 right-2 mx-1"/>
                    </div>
                    <div className="relative my-4">
                        <label className="absolute text-white duration-300 transform -translate-y-8 scale-90 top-1 -z-10 origin-[0]">Confirm Password</label>
                        <input type="password" className="block w-72 py-0.5 px-4 text-sm bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:focus:border-blue-400 outline-none" placeholder="Password"/>
                        <BiLock className="absolute text-white top-1 right-2 mx-1"/>
                    </div>
                    
                    <button className="w-full mb-4 text-large mt-6 py-1 rounded-full bg-white text-blue-300 hover:bg-blue-400 hover:text-white transition-colors duration-250" type="submit">Register</button>
                    <div className="text-center mt-2">
                        <span>Already a member? <Link to="../register" className="text-blue-400">Login</Link></span>
                    </div>
                </form>
                </div>
            </main> 
        </div>
    )
}