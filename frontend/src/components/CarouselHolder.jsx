/* eslint-disable react/prop-types */
import Carousel from "./Carousel";

export default function CarouselHolder(props){
    return(
        <div>
            <div className="flex items-center bg-orange-600 px-2">
                <h1 className="text-2xl font-bold text-center bg-orange-400 px-4 w-28">{props.title}</h1>
                <Carousel />
            </div>
        </div>
    )
}