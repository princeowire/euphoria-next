"use client"
import React, { useState } from 'react';

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleClick = (index) => {
    setRating(index + 1); // Set the rating based on the index of the clicked star
  };

  return (
    <div style={{ display: 'flex', cursor: 'pointer' }}>
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          onClick={() => handleClick(index)}
          style={{
            fontSize: '1.5rem',
            color: index < rating ? 'gold' : 'gray',
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
