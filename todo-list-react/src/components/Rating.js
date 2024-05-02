import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const Rating = ({ label, value, onRate }) => {
  const [hover, setHover] = useState(null);

  return (
    <div className="rating-section">
      <span>{label}: </span> {/* Display the label */}
      <div className="rating">
        {[...Array(5)].map((_, index) => {
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
              aria-label={`Rate ${label} ${ratingValue} stars`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Rating;



