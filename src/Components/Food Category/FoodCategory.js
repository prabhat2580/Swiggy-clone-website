import React, { useRef } from 'react';
import categoryData from '../../Assets/All_Product';
import { Link } from 'react-router-dom';
import './FoodCategory.css';

export default function FoodCategory() {
  const scrollContainerRef = useRef();

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
  };

  return (
    <div className="category-wrapper">
      <h1 className="category-heading">What's On Your Mind?</h1>

      {/* Arrow Buttons */}
      <div className="scroll-arrows">
        <button onClick={scrollLeft} className="arrow-btn">&lt;</button>
        <button onClick={scrollRight} className="arrow-btn">&gt;</button>
      </div>

      {/* Scrollable Grid */}
      <div className="category-scroll" ref={scrollContainerRef}>
        {/* Display in two rows */}
        <div className="scroll-inner-grid">
          {categoryData.map((item, index) => (
            <Link to={`/category/${item.path}`} key={index} className="category-card">
              <img src={`/images/${item.image}`} alt={item.path} className="category-img" />
              {/* <p className="category-label">{item.path.replace(/-/g, ' ')}</p> */}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
