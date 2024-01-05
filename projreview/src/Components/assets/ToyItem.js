// ToyItem.js
import React from 'react';
const ToyItem = ({ toy }) => {
  return (
    <div className="toy-item">
      <h3>{toy.name}</h3>
      <p>Price: ${toy.price}</p>
      {/* Add more details or actions as needed */}
    </div>
  );
};

export default ToyItem;
