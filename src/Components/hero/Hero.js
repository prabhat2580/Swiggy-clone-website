import React, { Component } from 'react';
import './Hero.css';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();
  

  function handleButtonClick(){
    navigate('/Component2');
  }

  return (
    <div className='hero-container'>
      {/* Left Veggie Image */}
      <div className="hero-left-img-wrapper">
        <img
          className="hero-left-img"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
          alt="Veggies"
        />
      </div>

      {/* Right Sushi Image */}
      <div className="hero-right-img-wrapper">
        <img
          className="hero-right-img"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
          alt="Sushi"
        />
      </div>

      <div className="main-heading">
        <h1>Order food & groceries. Discover best restaurants. Swiggy it!</h1>
      </div>

      <div className='input-field'>
        {/* Location Input with Icon */}
        <div className="input-wrapper">
          <span className="material-icons input-icon">location_on</span>
          <input
            className='input-field-1'
            type="text"
            placeholder="Enter your delivery location"
          />
        </div>

        {/* Search Input with Icon */}
        <div className="input-wrapper"> 
          <span className="material-icons input-icon">search</span>
          <input
            className='input-field-2'
            type="text"
            placeholder="Search for restaurant, item or more"
          />
        </div>
      </div>
      <div className='food-insta-dine-btn' >
        <button className="food-btn" onClick={handleButtonClick}>
  <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png" alt="Icon" />
</button>


<button className="food-btn">
  <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png" alt="Icon" />
</button>


        <button className='food-btn'>
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png" alt="icon" />
        </button>
        </div>
    </div>
  );
}
