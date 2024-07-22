import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./HospitalDetailScreen.css"
import HospitalDetails from "../../Components/HospitalDetail/HospitalDetails";
import config from "../../config";
const { BASE_API_URL } = config;

function HospitalDetailScreen({userInfo,setUserInfo}) {
  const { id } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const API_ENDPOINT = `${BASE_API_URL}/hospital-details?id=${id}`;
    fetch(API_ENDPOINT)
      .then((res) => res.json())
      .then((data) => setDetails(data.data))
      .catch((error) => console.error("Error fetching hospital details:", error));
  }, [id]);

  return (
    <div className="details-screen-container">
        <div className="details">
        {details ? <HospitalDetails details={details} /> : <p>Loading...</p>}
        </div>
      </div>
  );
}

export default HospitalDetailScreen;
