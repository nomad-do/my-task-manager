import React, { useState } from 'react';  // Import React and useState
import { FaStar } from 'react-icons/fa';  // Import FaStar

const Rating = ({ label, value, onRate }) => {
    const [hover, setHover] = useState(null);  // useState hook in use

    return (
        <div className="rating-section" aria-label={`${label} rating`}>
            <span>{label}: </span>
            {[...Array(5)].map((_, index) => {
                const ratingValue = index + 1;
                return (
                    <FaStar
                        key={ratingValue}
                        onClick={() => onRate(value === ratingValue ? null : ratingValue)}
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(null)}
                        color={(hover !== null ? (ratingValue <= hover) : (value !== null && ratingValue <= value)) ? "#ffc107" : "#e4e5e9"}
                        style={{ cursor: 'pointer' }}
                    />
                );
            })}
        </div>
    );
};

export default Rating;
