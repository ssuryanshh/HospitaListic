import React, { useState } from 'react'
import "./LandingScreen.css"
import HeroSection from '../../Components/LandingScreen/HeroSection/HeroSection'
import CitySection from '../../Components/LandingScreen/CitySection/CitySection';
function LandingScreen({userInfo,setUserInfo}) {
    const [search, setSearch] =useState("");
  return (
    <div className='container'>
        <HeroSection setSearch={setSearch}/>
      <CitySection search = {search}/>
    </div>
  )
}

export default LandingScreen
