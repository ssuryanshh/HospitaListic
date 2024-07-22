import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import "./HospitalDetails.css";

function HospitalDetails({ details }) {
  const { name, cityName, speciality, rating, description, images, numberOfDepartments, numberOfDoctors } = details;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className='details-container'>
      <div className='details-header'>
        <div>
          <h1>{name}</h1>
          <h4>{cityName}</h4>
        </div>
        <div>
        <Rating name="read-only" value={rating} precision={0.1} readOnly /></div>
      </div>
      <p><b>Specialities: </b>{speciality.join(', ')}</p>
      <div className='detail'>      <p>Number of Departments: {numberOfDepartments}</p>
      <p>Number of Doctors: {numberOfDoctors}</p></div>

      <div className='image-container'>
        <button onClick={handlePrevious} className='prev'>&#10094;</button>
        <img src={images[currentImageIndex]} alt={`${name}-${currentImageIndex}`} />
        <button onClick={handleNext} className='next'>&#10095;</button>
      </div>
      <p>{description}</p>
    </div>
  );
}

export default HospitalDetails;
