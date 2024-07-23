import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import "./RegisterHospital.css";
import { DownOutlined } from "@ant-design/icons";
import { Select } from "antd";
import config from "../../config";

const MAX_COUNT = 2;
const specialities = [
  { value: "Cardiology", label: "Cardiology" },
  { value: "Neurology", label: "Neurology" },
  { value: "Orthopedics", label: "Orthopedics" },
  { value: "Pediatrics", label: "Pediatrics" },
  { value: "Oncology", label: "Oncology" },
  { value: "Dermatology", label: "Dermatology" },
  { value: "Gastroenterology", label: "Gastroenterology" },
  { value: "Endocrinology", label: "Endocrinology" },
  { value: "Urology", label: "Urology" },
];

const { BASE_API_URL } = config;

function RegisterHospital({ userInfo, setUserInfo }) {
  const [name, setName] = useState("");
  const [city, setCity] = useState("Select a City");
  const [image, setImage] = useState("");
  const [speciality, setSpeciality] = useState([]);
  const [rating, setRating] = useState();
  const [cities, setCities] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${BASE_API_URL}/hospitals/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
        body: JSON.stringify({
          cityId: city,
          name,
          image,
          speciality,
          rating,
        }),
      });
      const result = await response.json();
      if (result.success) {
        console.log("Hospital added successfully!");
      } else {
        console.error("Error adding hospital:", result.message);
      }
    } catch (error) {
      console.error("Error adding hospital:", error);
    }
  };

  useEffect(() => {
    fetch(`${BASE_API_URL}/cities/all`)
      .then((response) => response.json())
      .then((data) => setCities(data.data));
  }, []);

  const handleRatingChange = (event) => {
    let value = parseFloat(event.target.value);
    if (isNaN(value)) {
      setRating(0);
    } else if (value > 5) {
      setRating(5);
    } else if (value < 0) {
      setRating(0);
    } else {
      setRating(value);
    }
  };

  const suffix = (
    <>
      <span>
        {speciality.length} / {MAX_COUNT}
      </span>
      <DownOutlined />
    </>
  );

  return (
    <div className="hospital-register">
      <form onSubmit={handleSubmit} id="form">
        <h1>Add Hospital</h1>
        <br />
        <TextField
          fullWidth
          style={{ backgroundColor: "white" }}
          typography={{ fontSize: 5 }}
          label="Enter Hospital Name"
          id="fullWidth"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <br />
        <Select
          showSearch
          style={{ width: "100%" }}
          placeholder="Select City"
          value={city}
          onChange={(value) => setCity(value)}
        >
          {cities.map((city) => (
            <Select.Option key={city._id} value={city._id}>
              {city.city}
            </Select.Option>
          ))}
        </Select>
        <br />
        <TextField
          fullWidth
          label="Enter Image URL"
          style={{ backgroundColor: "white" }}
          id="fullWidth"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />
        <br />
        <Select
          mode="multiple"
          maxCount={MAX_COUNT}
          value={speciality}
          style={{ width: "100%" }}
          suffixIcon={suffix}
          onChange={setSpeciality}
          placeholder="Please select Speciality for the hospital"
          options={specialities}
        />
        <br />
        <TextField
          fullWidth
          label="Give Ratings for the Hospital"
          type="number"
          id="fullWidth"
          style={{ backgroundColor: "white" }}
          value={rating}
          onChange={handleRatingChange}
          inputProps={{ step: 0.5, min: 0, max: 5 }}
        />
        <br />
        <button className="register">Add Hospital</button>
      </form>
    </div>
  );
}

export default RegisterHospital;
