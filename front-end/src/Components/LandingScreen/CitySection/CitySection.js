import React, { useState, useEffect } from "react";
import "./CitySection.css";
import City from "./City/City";
import config from "../../../config";
const { BASE_API_URL } = config;
function CitySection({ search }) {
  const [city, setCity] = useState([]);
  const [filteredCity, setFilteredCity] = useState([]);
  useEffect(() => {
    const API_ENDPOINT = `${BASE_API_URL}/cities/all`;
    fetch(API_ENDPOINT)
      .then((res) => res.json())
      .then((data) => {
        setCity(data.data);
      });
  }, []);
  useEffect(() => {
    if (search === "") {
      setFilteredCity(city);
    } else {
      const filtered = city.filter((item) => {
        return item.city.toLowerCase().includes(search.toLowerCase());
      });
      setFilteredCity(filtered);
    }
  }, [search, city]);

  return (
    <div className="card-container">
      {filteredCity.map((city) => (
        <City key={city.id} {...city} />
      ))}
    </div>
  );
}

export default CitySection;
