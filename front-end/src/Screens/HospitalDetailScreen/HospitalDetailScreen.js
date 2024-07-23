import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./HospitalDetailScreen.css"
import HospitalDetails from "../../Components/HospitalDetail/HospitalDetails";
import UpdateForm from "../../Components/HospitalDetail/UpdateForm/UpdateForm";
import config from "../../config";
const { BASE_API_URL } = config;

function HospitalDetailScreen({userInfo}) {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  const handleUpdate=()=>{
    console.log("update");

  }
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
        {userInfo.role === 'admin' && (
          <div className="update-form-container">
            <hr/>
            {details ? <UpdateForm details={details} userInfo = {userInfo} onUpdate = {handleUpdate} /> :
            <p>Loading...</p>
            }
            </div>
            )}
      </div>

  );
}

export default HospitalDetailScreen;
