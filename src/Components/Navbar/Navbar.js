import React, { useState } from 'react';
import './Navbar.css';


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='navbar'>
      {/* Logo */}
      <div className='swiggy-logo'>
        <img 
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png" 
          alt="Swiggy Logo" 
        />
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Desktop Menu */}
      <div className={`nav-menu-wrapper ${menuOpen ? 'open' : ''}`}>
        <div className="nav-menu">
          <button className='menu-btn'>Swiggy Corporate</button>
          <button className='menu-btn'>Partner with us</button>
        </div>

        <div className="nav-buttons">
          <button className='get-app-btn'>Get the App ↗</button>
          <button className='sign-in-btn'>Sign in</button>
        </div>
      </div>
    </div>
    
  );
}
