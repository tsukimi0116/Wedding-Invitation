import React from 'react'
import Navbar from './Navbar'
import Main from './Main'
import Memories from './Memories'
import Memories2 from './Memories2'
import Form from './Form'
import '../Stylesheets/Home.css'

const Home = () => {

    return (
        <div>
            <Navbar />
            <Main />
            <Memories />
            <Memories2 />
            <Form />
        </div>
    )
}

export default Home;