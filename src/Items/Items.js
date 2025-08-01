import React from 'react';
import './Items.css'; // optional for styling

export default function Items({ data }) {
  return (
    <div className="restaurant-card">
      <img src={`/images/${data.image}`} alt={data.title} className="restaurant-img" />
      <div className="restaurant-info">
        <h3>{data.title}</h3>
        <p className="restaurant-offer">{data.offer}</p>
        <p>{data.name}</p>
        <p>{data.place}</p>
        <div className="restaurant-meta">
          <span>Rating={data.rating}</span>
          <span>{data.minTime}-{data.maxTime} min</span>
        </div>
      </div>
    </div>
  );
}
