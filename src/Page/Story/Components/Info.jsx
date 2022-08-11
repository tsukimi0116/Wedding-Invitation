import {useEffect, useRef} from "react";
import Fizz from "../../../Assets/fizz.jpg"
import Yuri from "../../../Assets/yuri.jpg"

export const Info = () => {

    const storyInfo = useRef();
    const block1 = useRef();
    const block2 = useRef();

    window.addEventListener('scroll',(e)=>{
        let scroll = window.scrollY;
        if (scroll > 400) {
            storyInfo.current.style.opacity = 1;
            block1.current.style.opacity = 1;
            block1.current.style.transform = "translateX(0)";
            block2.current.style.opacity = 1;
            block2.current.style.transform = "translateX(0)";
        }
    })

    return (
        <div ref={storyInfo} className="info">
            <div ref={block1} className="info__block">
                <div className="info__block--img">
                    <img src={Fizz} alt=""/>
                </div>
                <div className="info__block--text">
                    <p>Teddy'S STORY</p>
                    <span>我用6年的時間帶妳一起看過許多風景，發現妳的很多第一次，都有我參與，每次看到妳驚喜的表情還有雀躍的行為，根本就是帶一個大童出門玩吧😂，謝謝妳為了我成長這麼多，雖然有時候沒辦法陪在妳身邊，也無法像其他人一樣，隨傳隨到，但若不是有這些，我也不會確定走一輩子的人是妳，我們還有很多關卡，等著我們突破，我相信未來的我們，會更完整、更好，老婆我愛你❤️</span>
                </div>
            </div>

            <div ref={block2} className="info__block">
                <div className="info__block--img">
                    <img src={Yuri} alt=""/>
                </div>
                <div className="info__block--text">
                    <p>Yuri'S STORY</p>
                    <span>6年的時光，我們從校園到出社會，這一路上，吵過無數次的架，還堅定的牽著手，我想這是我們能夠一直走在一起的原因，這一路，我也成長了很多，無論是想法或行為上，一開始我牽著你，後面你帶著我長大，現在決定嫁給你，不是憧憬和幻想，是真的想兩個人一起生活，選擇你也是我這輩子，最大的決定，我永遠是會你心中的小公主呦❤️
「不可以冷落我哦(⁎⁍̴̛ᴗ⁍̴̛⁎)」，愛你呦💋</span>
                </div>
            </div>
        </div>
    )
}