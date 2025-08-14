import React, { useState } from 'react';
import './Navbar2.css';
import { Link } from 'react-router-dom';
import { useCart } from '../../Context/CartContext'; // adjust path

export default function Navbar2() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const { cartItems } = useCart();

  // Calculate total quantity of all items in cart
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

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
            <Link to="/cart" style={{ position: 'relative' }}>
              <img className='cart-img' src="./images/cart_icon.png" alt="cart" />
              {cartCount > 0 && (
                <div className="nav-cart-count">{cartCount}</div>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
