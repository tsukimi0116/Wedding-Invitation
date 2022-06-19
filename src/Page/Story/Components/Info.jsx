import Fizz from "../../../Assets/fizz.jpg"
import Yuri from "../../../Assets/yuri.jpg"

export const Info = () => {

    return (
        <div className="info">
            <div className="info__block">
                <div className="info__block--img">
                    <img src={Fizz} alt=""/>
                </div>
                <div className="info__block--text">
                    <p>Teddy'S STORY</p>
                    <span>我用6年的時間帶妳一起看過許多風景發現妳的很多第一次，都有我參與每次看到妳驚喜的表情還有雀躍的行為根本就是帶一個大童出門玩吧😂謝謝妳為了我成長這麼多雖然有時候沒辦法陪在妳身邊也無法像其他人一樣，隨傳隨到但若不是有這些，我也不會確定走一輩子的人，是妳我們還有很多關卡，等著我們突破我相信未來的我們，會更完整、更好，老婆我愛你❤️</span>
                </div>
            </div>

            <div className="info__block">
                <div className="info__block--img">
                    <img src={Yuri} alt=""/>
                </div>
                <div className="info__block--text">
                    <p>Yuri'S STORY</p>
                    <span>6年的時光，我們從校園到出社會這一路上吵過無數次的架，還堅定的牽著雙手我想這是我們能夠一直走在一起的原因我也成長了很多，無論是想法或行為上一開始我牽著你，後面你帶著我長大現在決定嫁給你，不是憧憬和幻想是真的想兩個人一起生活選擇你也是我這輩子，最大的決定我永遠是會你心中的小公主呦❤️「如果冷落我就死定了(⁎⁍̴̛ᴗ⁍̴̛⁎)」老公，我愛你</span>
                </div>
            </div>
        </div>
    )
}