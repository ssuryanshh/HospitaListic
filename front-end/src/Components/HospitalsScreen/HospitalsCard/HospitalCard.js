import React from "react";
import "./HospitalCard.css";
import { Link } from "react-router-dom";
import {StarFilled} from '@ant-design/icons'
function HospitalCard({ _id, name, image, speciality, rating }) {
  return (
    <Link to={`/details/${_id}`}>
      <div className="hospital-card">
        <img src={image} alt={`${name} hospital`} className="hospital-img" />
        <div className="rating">{rating} <StarFilled /> </div>
        <div className="hospital-info">
          <h3>{name}</h3>
          //<p>Specialities: {speciality.join(", ")}</p>
        </div>
      </div>
    </Link>
  );
}

export default HospitalCard;
