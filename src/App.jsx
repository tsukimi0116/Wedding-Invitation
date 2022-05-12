import React from 'react';
import { AnimatePresence } from 'framer-motion'
import { Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from './Page/Home/Components/Navbar';
import Main from './Page/Home/Components/Main';
import Memories from './Page/Home/Components/Memories';
import Memories2 from './Page/Home/Components/Memories2';
import Form from './Page/Home/Components/Form';
import Error404 from './Page/Error/Components/Error404';
import './Page/Home/Stylesheets/Home.css'


const App = () => {

  const location = useLocation()

  return (
    <>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Main />} exact />
          <Route path="/Home" element={<Main />} exact />
          <Route path="/Our%20Story" element={<Memories />} exact />
          <Route path="/The%20Wedding" element={<Memories2 />} exact />
          <Route path="/RSVP" element={<Form />} exact />
          <Route path="*" element={<Error404 to="/" replace />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
