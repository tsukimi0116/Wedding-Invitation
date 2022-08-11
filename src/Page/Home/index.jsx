import {useEffect, useRef} from "react";
import {Story} from "../Story";
import {Wedding} from "../Wedding";

export const Main = () => {


    return (
        <>
            <div className='main'>
                <div className='main__title'>
                    <span>Teddy &nbsp;and&nbsp;&nbsp; Yuri</span>
                    <p>WE'RE MARRIED</p>
                </div>
            </div>
            <Story/>
            <Wedding/>
        </>
    )
}