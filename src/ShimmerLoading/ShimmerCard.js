import React from 'react'
import './ShimmerLoading.css'

export default function ShimmerCard() {
  return (
    <div className="shimmer-card">
      <div className="shimmer-img shimmer"></div>
      <div className="shimmer-content">
        <div className="shimmer-line shimmer"></div>
        <div className="shimmer-line shimmer"></div>
        <div className="shimmer-line short shimmer"></div>
      </div>
    </div>
  );
}

