import React, { useRef } from 'react';
import './Restaurents.css';

import restaurantData from '../../Assets/RestaurentData';
import Items from '../../Items/Items';

export default function Restaurents() {
  const scrollRef = useRef();

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth; // scroll by full container width
      scrollRef.current.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount;
    }
  };

  return (
    <div className="restaurant-scroll-wrapper">
      <h2 className="restaurant-section-title">Top Restaurants Near You</h2>

      <div className="scroll-arrows">
        <button className="arrow-btn left" onClick={() => scroll('left')}>&lt;</button>
        <button className="arrow-btn right" onClick={() => scroll('right')}>&gt;</button>
      </div>

      <div className="restaurant-scroll-container" ref={scrollRef}>
        <div className="restaurant-scroll-grid">
          {restaurantData.map((item, index) => (
            <div key={index} className="restaurant-card-wrapper">
              <Items data={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
