import {Link} from "react-router-dom";
import { MdOutlineMailOutline } from "react-icons/md";
import {BiLock} from "react-icons/bi"

export default function LoginPage(){
    return(
        <div className="text-white h-[100vh] flex justify-center items-center bg-cover" style={{"backgroundImage": "url(./src/assets/register_background.jpg)"}}>  
            <main>
                <div className="bg-slate-800 bprder border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-xl bg-opacity-75 relative">
                <div className="text-4xl text-white font-bold text-center mb-6">Login</div>
                <form action="" className="flex flex-col">
                    <div className="relative my-6">
                        <label className="absolute text-white duration-300 transform -translate-y-8 scale-90 top-1 -z-10 origin-[0]">E-mail</label>
                        <input type="email" className="block w-72 py-0.5 px-4 text-sm bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:border-blue-400 outline-none" placeholder="Email@mail.com"/>
                        <MdOutlineMailOutline className="absolute text-white top-1 right-2 mx-1"/>
                    </div>
                    <div className="relative my-6">
                        <label className="absolute text-white duration-300 transform -translate-y-8 scale-90 top-1 -z-10 origin-[0]">Password</label>
                        <input type="password" className="block w-72 py-0.5 px-4 text-sm bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:border-blue-400 outline-none" placeholder="Password"/>
                        <BiLock className="absolute text-white top-1 right-2 mx-1"/>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="relative my-4 flex gap-2 items-center">
                            <input type="checkbox" name="" id=""/>
                            <label htmlFor="Remeber Me">Remember Me</label> 
                        </div>
                        <span className="text-blue-400">Forgot Password</span>
                    </div>
                    
                    
                    <button className="w-full mb-4 text-large mt-6 py-1 rounded-full bg-white text-blue-300 hover:bg-blue-400 hover:text-white transition-colors duration-250" type="submit">Login</button>
                    <div className="text-center mt-2">
                        <span>New Here? <Link to="../register" className="text-blue-400">Create an Account</Link></span>
                    </div>
                </form>
                </div>
            </main> 
        </div>
    )
}