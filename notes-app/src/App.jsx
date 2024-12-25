import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Paste from './component/Paste';
import ViewPaste from './component/ViewPaste';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pastes" element={<Paste />} />
        <Route path="/pastes/:id" element={<ViewPaste />} />
      </Routes>
    </Router>
  );
};

export default App;
