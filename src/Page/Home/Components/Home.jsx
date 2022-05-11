import React, { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import Navbar from './Navbar'
import Main from './Main'
import Memories from './Memories'
import Form from './Form'
import '../Stylesheets/Home.css'
import { useSelector } from 'react-redux'

const Home = () => {
    const [render, setRender] = useState()
    const page = useSelector((state) => state.page.page)
    const [first, setfirst] = useState(true)

    useEffect(() => {
        switch (page) {
            case 0:
                setRender(<Main />)
                break;
            case 1:
                setRender(<Memories />)
                break;
            case 3:
                setRender(<Form />)
                break;
        }
    }, [page]);

    return (
        <div>
            <Navbar />
            {/* <CSSTransition
                in={first}
                timeout={1000}
            > */}
            {/* <Main /> */}
            {render}
            {/* </CSSTransition> */}
        </div>
    )
}

export default Home;