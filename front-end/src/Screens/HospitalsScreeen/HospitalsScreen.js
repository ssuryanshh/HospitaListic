import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeroSection from "../../Components/HospitalsScreen/HeroSection/HeroSection";
import HospitalCard from "../../Components/HospitalsScreen/HospitalsCard/HospitalCard";
import "./HospitalsScreen.css";
import config from "../../config";
const { BASE_API_URL } = config;

function HospitalsScreen({userInfo,setUserInfo}) {
  const { id } = useParams();
  const [hospital, setHospital] = useState([]);
  
  useEffect(() => {
    const API_ENDPOINT = `${BASE_API_URL}/hospitals?city=${id}`;
    fetch(API_ENDPOINT)
      .then((res) => res.json())
      .then((APIData) => {
        const { data } = APIData;
        setHospital(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  return (
    <div className="hospital-container">
      <HeroSection city = {id}/>
      <div className="hospital-card-container">
        {hospital.length === 0 && <h2>No result Found</h2>}
        {hospital.map((hospital) => (
          <HospitalCard 
            key={hospital._id} 
            _id={hospital._id}
            name={hospital.name}
            image={hospital.image}
            speciality={hospital.speciality}
            rating={hospital.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default HospitalsScreen;
