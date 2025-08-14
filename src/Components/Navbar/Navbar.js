import React, { useState } from 'react';
import './Navbar.css';
import { Navigate } from 'react-router-dom';

export default function Navbar({ setShowLogin, onLogout, user }) {
  const [menuOpen, setMenuOpen] = useState(false);



  return (
    <div className='navbar'>
      <div className='swiggy-logo'>
        <img 
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png" 
          alt="Swiggy Logo" 
        />
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className={`nav-menu-wrapper ${menuOpen ? 'open' : ''}`}>
        <div className="nav-menu">
         <button className='menu-btn'onClick={() => window.location.href = "https://www.swiggy.com/corporate/"}> Swiggy Corporate</button>
          <button className='menu-btn'>Partner with us</button>
        </div>

        <div className="nav-buttons">
          <button className='get-app-btn'>Get the App ↗</button>
          {user ? (
            <button className='sign-in-btn' onClick={onLogout}>Logout</button>
          ) : (
            <button className='sign-in-btn' onClick={() => setShowLogin(true)}>Sign in</button>
          )}
        </div>
      </div>
    </div>
  );
}
