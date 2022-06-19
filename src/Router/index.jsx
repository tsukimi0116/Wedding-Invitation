import { useRoutes } from "react-router-dom"
import {Error404} from "../Page/Error";
import {Main} from "../Page/Home";
import {Story} from "../Page/Story";
import {Wedding} from "../Page/Wedding";

export const Routers = () => {

    return useRoutes([
        {
            path:"/",
            element: <Main/>
        },
        {
            path:"/Wedding-Invitation",
            element: <Main/>
        },
        {
            path:"/Story",
            element: <Story/>
        },
        {
            path:"/Wedding",
            element: <Wedding/>
        },
        {
            path:"/RSVP",
            element: <Main/>
        },
        {
            path:"*",
            element: <Error404 to="/" replace/>
        }
    ])

}