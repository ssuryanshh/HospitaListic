import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import "./NavBar.css";

function NavBar({ userInfo, setUserInfo }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUserInfo({
      isSignin: false,
      userId: null,
      token: null,
      email: null,
      role: null,
      name: null
    });
    toast.success('Successfully logged out!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigate('/');
  };

  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <Link to="/">HOSPITALISTIC</Link>
      </div>
      <div className="navbar-right">
        <Link to="/">HOME</Link>
        {userInfo.isSignin ? (
          <>
            <span>Hi, {userInfo.name}</span>
            <button onClick={handleLogout} className="logout-button">Logout</button>
          </>
        ) : (
          <Link to="/user">
            <span>LOGIN/REGISTER</span>
          </Link>
        )}
      </div>
    </div>
  );
}

export default NavBar;
