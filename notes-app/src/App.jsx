import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './component/Home';

import ViewPaste from './component/ViewPaste';

const App = () => {


  

  return (
    <div>
      <Routes>
      <Route path="/" element={<Home />} />
    
      <Route path="/viewpaste" element={<ViewPaste />} />
    </Routes>
     
    </div>
  );
};

export default App;
