import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const Rating = ({ value, onRate }) => {
  const [hover, setHover] = useState(null);

  return (
    <div>
      {[...Array(5)].map((_, index) => { // Create an array of 5 elements for the 5 stars
        const ratingValue = index + 1;

        return (
          <FaStar
            key={ratingValue}
            className="rating-star"
            size={20}
            color={ratingValue <= (hover || value) ? "#ffc107" : "#e4e5e9"}
            onClick={() => onRate(ratingValue)}
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(null)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onRate(ratingValue);
              }
            }}
            tabIndex={0}
            role="button"
            aria-label={`Rate ${ratingValue}`}
          />
        );
      })}
    </div>
  );
};

export default Rating;
