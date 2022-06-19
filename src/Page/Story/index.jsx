import React from 'react';
import {AnimatedPage} from "../Animation";

export const Story = () => {

    return (
        <AnimatedPage>
            <div className='Memories'>
                <div className='MemoriesImage'>
                    {/*<img src="src/Page/Story/Memories" alt='' />*/}
                </div>
                <div className='textArea'>
                    <p>What is Lorem Ipsum?</p>
                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
                </div>
                <div className='textAreaShadow'></div>
            </div>
        </AnimatedPage>
    )
}