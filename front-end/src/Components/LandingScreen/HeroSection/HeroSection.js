import React from "react";
import "./HeroSection.css";
function HeroSection({ setSearch }) {
  return (
    <div className="hospitalistic">
      <div className="content">
        <h2>Welcome to Hospitalistic</h2>
        <br />
        <p>Explore the world with fantastic places to venture around.</p>
        <br />
        <input
          type="text"
          placeholder="Search a City"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        ></input>
      </div>
    </div>
  );
}

export default HeroSection;
