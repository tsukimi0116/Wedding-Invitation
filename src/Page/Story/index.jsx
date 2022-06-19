import {AnimatedPage} from "../Animation";
import {Title} from "./Components/Title"
import {Info} from "./Components/Info"

export const Story = () => {

    return (
        <AnimatedPage>
            <div className='story'>
                <Title/>
                <Info/>
            </div>
        </AnimatedPage>
    )
}