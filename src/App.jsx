import React from 'react';
import {AnimatePresence} from 'framer-motion'
import {Routers} from "./Router";
import Navbar from './Components/Navbar';
import './StyleSheets/Main.scss'

const App = () => {

    return (
        <>
            <Navbar/>
            <AnimatePresence exitBeforeEnter>
                {/*<Routes key={location.pathname} location={location}>*/}
                <Routers/>
                {/*</Routes>*/}
            </AnimatePresence>
        </>
    );
}

export default App;
