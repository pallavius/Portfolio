import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Professionals from './pages/Professionals';
import Portfolio from './pages/Portfolio';
import EditProfile from './pages/EditProfile';
import Navbar from './components/Common/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/professionals" element={<Professionals />} />
        <Route path="/portfolio/:id" element={<Portfolio />} />
        <Route path="/edit-profile" element={<EditProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
