import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Past from './component/Past';
import ViewPaste from './component/ViewPaste';
import Navbar from './component/Navbar';
const App = () => {
  return (

    <div className="main">
   <BrowserRouter>
   <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/past" element={<Past />} />
        <Route path="/viewpaste" element={<ViewPaste />} />
      </Routes>
    </BrowserRouter>
    </div>
 
  );
};

export default App;
