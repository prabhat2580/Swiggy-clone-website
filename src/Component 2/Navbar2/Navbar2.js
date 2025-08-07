import React, { useState } from 'react';
import './Navbar2.css';
import { Link } from 'react-router-dom';

export default function Navbar2() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className='Navbar2-container2'>
      <div className='swiggy-logo-other2'>
        <img src="./images/swiggy12.png" alt="Swiggy" />
        <button>Others</button>
      </div>

      <div className="hamburger2" onClick={toggleMenu}>
        ☰
      </div>

      <div className={`nav-items-list2 ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <a
              href="https://www.swiggy.com/corporate/"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              Swiggy Corporate
            </a>
          </li>
          <li>Search</li>
          <li>Offers</li>
          <li>Help</li>
          <li>
            <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
