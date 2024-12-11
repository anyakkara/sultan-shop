import React from 'react';
import './CareLists.css';

const CareSection = ({ title, items = []  }) => (
  <div className="care-section">
    <h2>{title}</h2>
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

export default CareSection;
