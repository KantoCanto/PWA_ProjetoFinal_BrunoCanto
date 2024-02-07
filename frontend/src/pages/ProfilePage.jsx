import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CarouselHolder from "../components/CarouselHolder";


export default function ProfilePage(){
    return(
        <div className="flex flex-col h-screen justify-between">
            <Navbar />
            <main>
                <section>
                    <div>
                        <CarouselHolder title={"Highest Rating"}/>
                        <CarouselHolder title={"Recent Releases"}/>
                        <CarouselHolder title={"Popular Titles"}/>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}