import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SingleGame from "../components/SingleGame";

export default function GamePage(){
    return(
        <div className="flex flex-col h-screen justify-between">
            <Navbar />
            <main className="">
               <SingleGame/>
            </main>
            <Footer />
        </div>
    )
}