import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const Rating = ({ label, value, onRate }) => {
  const [hover, setHover] = useState(null);

  // Function to handle rating changes, ensures the rating is within the expected range
  const handleRate = (ratingValue) => {
    const validRate = Math.max(0, Math.min(5, ratingValue)); // Clamp the value between 0 and 5
    onRate(validRate);
  };

  return (
    <div className="rating-section" aria-label={`${label} rating`}>
      <span>{label}: </span> {/* Display the label */}
      <div className="rating" style={{ cursor: 'pointer' }}>
        {[...Array(5)].map((_, index) => {
          const ratingValue = index + 1;
          return (
            <FaStar
              key={ratingValue}
              className="rating-star"
              size={20}
              color={ratingValue <= (hover || value) ? "#ffc107" : "#e4e5e9"}
              onClick={() => handleRate(ratingValue)}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
              onKeyDown={(e) => { if (e.key === 'Enter') handleRate(ratingValue); }}
              tabIndex={0} // Make stars focusable
              aria-label={`Rate ${label} ${ratingValue} stars`}
              role="button" // Semantically mark as button for accessibility
            />
          );
        })}
      </div>
    </div>
  );
};

export default Rating;
