import React from 'react';
import {AnimatePresence} from 'framer-motion'
import {Routers} from "./Router";
import Nav from './Components/Nav';
import './StyleSheets/Main.scss'

const App = () => {

    return (
        <>
            {/*<Nav/>*/}
            <AnimatePresence exitBeforeEnter>
                <Routers/>
            </AnimatePresence>
        </>
    );
}

export default App;
