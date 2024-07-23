import React from 'react';
import "./HeroSection.css";

function toPascalCase(str) {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

function HeroSection({ city }) {
  const cityName = toPascalCase(city);

  return (
    <div className='hospitals-container'>
      <div className='new-section'>
        <h1>Explore all hospitals</h1>
        <p>Here's a list of all the hospitals in {cityName}</p>
        <hr />
      </div>
    </div>
  );
}

export default HeroSection;
