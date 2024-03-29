import {useRef} from "react";
import Flower from "../../../Assets/flower.png";

export const Title = () => {

    const storyTitle = useRef();

    window.addEventListener('scroll', () => {
        let scroll = window.scrollY;
        if (scroll > 200) {
            storyTitle.current.style.opacity = 1;
            storyTitle.current.style.transform = "translateY(0)";
        }
    })

    return (
        <div ref={storyTitle} className='story__title'>
            <p>Our Story</p>
            <img src={Flower} alt=""/>
        </div>
    )

}