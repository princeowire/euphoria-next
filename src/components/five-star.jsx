"use client"
import React, { useState } from 'react';

const StarRating = () => {
  const [rating, setRating] = useState(3);

  const handleClick = (index) => {
    setRating(index + 1); // Set the rating based on the index of the clicked star
  };

  return (
    <div style={{ display: 'flex', cursor: 'pointer' }} className='flex items-center'>
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
      <p className='pl-2'>{rating}</p>
    </div>
  );
};

export default StarRating;
