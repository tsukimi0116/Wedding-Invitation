import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from './Page/Home/Components/Home';
import Error404 from './Page/Error/Components/Error404';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="*" element={<Error404 to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
