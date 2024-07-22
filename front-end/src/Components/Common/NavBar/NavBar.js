import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

function NavBar({ userInfo, setUserInfo }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user info
    setUserInfo({
      isSignin: false,
      userId: null,
      token: null,
      email: null,
      role: null,
      name: null
    });
    // Navigate to home or login page
    navigate('/');
  };

  return (
    <div className="navbar-container">
      <div>
        <span>
          <Link to="/">HOSPITALISITIC</Link>
        </span>
      </div>
      <div>
        <span>
          {userInfo.isSignin ? (
            <>
              <span>Hi, {userInfo.name}</span>
              <button onClick={handleLogout} className="logout-button">Logout</button>
            </>
          ) : (
            <Link to="/user">
              <span>LOGIN/EGISTER</span>
            </Link>
          )}
        </span>
      </div>
    </div>
  );
}

export default NavBar;
