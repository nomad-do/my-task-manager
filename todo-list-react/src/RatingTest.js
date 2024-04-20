import React from 'react';
import ReactDOM from 'react-dom';
import Rating from './Rating'; // Adjust the relative path as necessary

// A test render of Rating with mock props
const TestRating = () => {
  const handleRate = (ratingValue) => {
    console.log(`Rated with value: ${ratingValue}`);
  };

  return <Rating value={3} onRate={handleRate} />;
};

ReactDOM.render(<TestRating />, document.getElementById('root'));
