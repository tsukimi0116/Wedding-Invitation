import {useEffect, useRef, useState} from "react";
import {RsvpForm} from "../../Rsvp/Form";

export const Info = () => {

    const block1 = useRef();
    const block2 = useRef();
    const [join, setJoin] = useState(false);

    window.addEventListener('scroll', (e) => {
        let scroll = window.scrollY;
        if (scroll > 1400) {
            block1.current.style.opacity = 1;
            block1.current.style.transform = "translateX(0)";
            block2.current.style.opacity = 1;
            block2.current.style.transform = "translateX(0)";
        }
    })

    const joinBtn =
        <div className="info__invite">
            <button onClick={()=>{
                setJoin(true)
            }} className="info__invite-button">我要參加</button>
        </div>

    const joinForm = <RsvpForm/>

    return (
        <>
            <div className="info">
                <div ref={block1} className="info__time">
                    <p>婚宴時間</p>
                    <span>Dec 03, 2022, 12:00</span>
                </div>

                <div ref={block2} className="info__place">
                    <p>婚宴地點</p>
                    <p>心園婚宴會館</p>
                    <span>南投縣南投市芳美路188號</span>
                </div>

                {join ? joinForm : joinBtn}

            </div>
            <div className="info__transition"></div>
        </>

    )
}