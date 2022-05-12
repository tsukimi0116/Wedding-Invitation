import React, { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import Navbar from './Navbar'
import Main from './Main'
import Memories from './Memories'
import Form from './Form'
import '../Stylesheets/Home.css'
import { useSelector } from 'react-redux'

const Home = () => {
    const [render, setRender] = useState(<Main />)
    const page = useSelector((state) => state.page.page)
    const [first, setfirst] = useState(false)

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
            <CSSTransition
                in={first}
                timeout={2000}
                classNames="changePage"
            >
                {render}
            </CSSTransition>
        </div>
    )
}

export default Home;