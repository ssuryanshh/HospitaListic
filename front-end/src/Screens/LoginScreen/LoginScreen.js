import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginScreen.css";
import config from "../../config";

const { BASE_API_URL } = config;

function LoginScreen({ setUserInfo }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const checkboxRef = useRef(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const ENDPOINT = `${BASE_API_URL}/auth/login`;
    const payload = {
      email: email,
      password: password,
    };

    const OPTION = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };

    try {
      let res = await fetch(ENDPOINT, OPTION);
      res = await res.json();
      console.log(res);
      if (res.success) {
        const { userId, token, email, name, role } = res;
        setUserInfo({
          isSignin: true,
          userId: userId,
          token: token,
          email: email,
          role: role,
          name: name,
        });
        navigate("/");
      } else {
        console.error("Login failed:", res.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const ENDPOINT = `${BASE_API_URL}/auth/register`;
    const payload = {
      name: name,
      email: email,
      password: password,
    };
    const OPTION = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };
    try {
      let res = await fetch(ENDPOINT, OPTION);
      res = await res.json();
      console.log(res);
      if (res.success) {
        checkboxRef.current.checked = false;
      } else {
        console.error("Sign up failed:", res.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="login-screen-container">
      <div className="user-container">
        <div className="wrapper">
          <div className="card-switch">
            <label className="switch">
              <input type="checkbox" className="toggle" ref={checkboxRef} />
              <span className="slider"></span>
              <span className="card-side"></span>
              <div className="flip-card__inner">
                <div className="flip-card__front">
                  <div className="title">Log in</div>
                  <form className="flip-card__form" onSubmit={handleLogin}>
                    <input
                      className="flip-card__input"
                      name="email"
                      placeholder="Email"
                      type="email"
                      onChange={handleEmailChange}
                      required
                    />
                    <input
                      className="flip-card__input"
                      name="password"
                      placeholder="Password"
                      type="password"
                      onChange={handlePasswordChange}
                      required
                    />
                    <button className="flip-card__btn">Let's go!</button>
                  </form>
                </div>
                <div className="flip-card__back">
                  <div className="title">Register</div>
                  <form className="flip-card__form" onSubmit={handleSignUp}>
                    <input
                      className="flip-card__input"
                      placeholder="Name"
                      type="text"
                      onChange={handleNameChange}
                      required
                    />
                    <input
                      className="flip-card__input"
                      name="email"
                      placeholder="Email"
                      type="email"
                      onChange={handleEmailChange}
                      required
                    />
                    <input
                      className="flip-card__input"
                      name="password"
                      placeholder="Password"
                      type="password"
                      onChange={handlePasswordChange}
                      required
                    />
                    <button className="flip-card__btn">Confirm!</button>
                  </form>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
