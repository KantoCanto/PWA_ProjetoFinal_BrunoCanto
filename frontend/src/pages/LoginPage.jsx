import {Link} from "react-router-dom";

export default function LoginPage(){
    return(
        <div className="text-white h-[100vh] flex justify-center items-center bg-cover" style={{"background": "url(./src/assets/register_background.jpg)"}}>  
            <main>
                <div>Login</div>
                <form action="" className="flex flex-col">
                    <label>E-mail</label>
                    <input type="email" placeholder="email@mail.com"/>
                    <label>Password</label>
                    <input type="password" placeholder="password"/>
                    <div>
                        <input type="checkbox" name="" id=""/>
                        <label htmlFor="Remeber Me">Remember Me</label>
                    </div>
                    <span>Forgot your Password?</span>
                    <button type="submit">Login</button>
                    <div>
                        <span>New Here? <Link to="Register">Create an Account</Link></span>
                    </div>
                </form>
            </main> 
        </div>
    )
}