import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";


export default function ProfilePage(){
    return(
        <div className="flex flex-col h-screen justify-between">
            <Navbar />
            <main>
                <section>
                    <div>
                        <Carousel />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}