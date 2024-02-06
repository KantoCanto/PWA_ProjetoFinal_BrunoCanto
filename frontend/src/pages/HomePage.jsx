import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Functionalities from "../components/Functionalities";
import Footer from "../components/Footer";

export default function HomePage(){
    return(
        <div className="flex flex-col h-screen justify-between">
            <Navbar />
            <main className="">
                <Hero/>
                <Functionalities />
            </main>
            <Footer />
        </div>
    )
}