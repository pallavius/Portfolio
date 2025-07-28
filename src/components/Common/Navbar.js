import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const handleReset = () => {
    localStorage.clear();
    navigate('/');
    window.location.reload(); // Ensures all state is reset
  };

  return (
    <nav style={{ background: '#222', padding: '1rem 2rem', marginBottom: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div>
        <Link to="/" style={{ color: '#fff', marginRight: 24, textDecoration: 'none', fontWeight: 'bold' }}>Home</Link>
        <Link to="/professionals" style={{ color: '#fff', marginRight: 24, textDecoration: 'none' }}>Professionals</Link>
        <Link to="/edit-profile" style={{ color: '#fff', textDecoration: 'none' }}>Edit Profile</Link>
      </div>
      <button className="btn" style={{ background: '#fff', color: '#222', fontWeight: 'bold' }} onClick={handleReset}>Reset Profile</button>
    </nav>
  );
};

export default Navbar; 