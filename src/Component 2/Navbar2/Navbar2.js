import React from 'react'
import './Navbar2.css'
import { Link } from 'react-router-dom'; 

export default function Navbar2() {
  return (
    <div className='Navbar2-container'>
        <div className='swiggy-logo-other'>
            <img src="./images/swiggy12.png" alt="" />
            <button>Others </button>
            
        </div>

        <div className='nav-items-list'><ul>
          <a href="https://www.swiggy.com/corporate/" style={{textDecoration:'none'}}> <li> Swiggy Corporate</li></a> 
            <li>Search</li>
            <li>Offers</li>
            <li>Help</li>
            <li><Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>
              Cart
            </Link>
            </li>
            
            </ul>
            </div>
    </div>
  )
}
