import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingScreen from "./Screens/LandingScreen/LandingScreen";
import NavBar from "./Components/Common/NavBar/NavBar";
import Footer from "./Components/Common/Footer/Footer";
import HospitalsScreen from "./Screens/HospitalsScreeen/HospitalsScreen";
import HospitalDetailScreen from "./Screens/HospitalDetailScreen/HospitalDetailScreen";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import RegisterHospital from "./Screens/RegisterHospital/RegisterHospital";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [userInfo, setUserInfo] = useState({
    isSignin: false,
    userId: "",
    token: "",
    role: "",
    email: "",
    name: ""
  });

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar userInfo={userInfo} setUserInfo={setUserInfo} />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<LandingScreen userInfo={userInfo} setUserInfo={setUserInfo} />} />
            <Route path="/hospitals/:id" element={<HospitalsScreen userInfo={userInfo} setUserInfo={setUserInfo} />} />
            <Route path="/details/:id" element={<HospitalDetailScreen userInfo={userInfo} setUserInfo={setUserInfo} />} />
            <Route path="/user" element={<LoginScreen userInfo={userInfo} setUserInfo={setUserInfo} />} />
            <Route path="/register" element={<RegisterHospital userInfo={userInfo} setUserInfo={setUserInfo} />} />
          </Routes>
        </div>
        <ToastContainer />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
