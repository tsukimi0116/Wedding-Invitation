import {useRef} from "react";
import Flower from "../../../Assets/flower.png";

export const Title = () => {

    const storyTitle = useRef();

    window.addEventListener('scroll', () => {
        let scroll = window.scrollY;
        // console.log(scroll)
        if (scroll > 1250) {
            storyTitle.current.style.opacity = 1;
            storyTitle.current.style.transform = "translateY(0)";
        }
    })

    return (
        <div ref={storyTitle} className='wedding__title'>
            <p>Big Day</p>
            <img src={Flower} alt=""/>
        </div>
    )

}