import React, { useState, useEffect } from "react";
import "./LoginSignup.css";
import {toast} from 'react-toastify';

import email from "../Components/Assets/email.png";
import password from "../Components/Assets/password.png";
import person from "../Components/Assets/person.png";
import sigin from "./Assets/signin.svg";
import login from "./Assets/login.png";

const LoginSignup = (props) => {
  const [action, setAction] = useState("SignUp");
  const [name, setName] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  useEffect(() => {
    document.title = props.pageTitle;
  }, [props.pageTitle]);

  const handleSignUp = async () => {
    const data = {
      name: name,
      email: emailValue,
      password: passwordValue,
    };
    console.log("Data to be sent:", data);

    const url = "YOUR_SIGNUP_API_ENDPOINT"; // Replace with your actual signup API endpoint

    try {
      console.log("data", data);
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Signup successful, handle success
        toast.success("Signup successful");
        console.log("Signup successful");
      } else {
        // Handle signup error
        toast.error("Error signing up");
        console.error("Error signing up");
      }
    } catch (error) {
      // Handle network error
      console.error("Network error", error);
    }
  };

  const handleLogin = async () => {
    const data = {
      email: emailValue,
      password: passwordValue,
    };
    console.log("Data to be sent:", data);

    const url = "YOUR_LOGIN_API_ENDPOINT"; // Replace with your actual login API endpoint

    try {
      console.log("data", data);
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Login successful, handle success
        toast.success("Login successful");
        console.log("Login successful");
      } else {
        // Handle login error
        toast.error("Error logging in");
        console.error("Error logging in");
      }
    } catch (error) {
      // Handle network error
      console.error("Network error", error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="image-container">
          {action === "SignUp" ? (
            <img className="image" src={sigin} alt="" />
          ) : (
            <img className="image2" src={login} alt="" />
          )}
        </div>
        <div className="form-container">
          <div className="header">
            <div className="text">{action}</div>
          </div>
          <div className="inputs">
            {action !== "Login" && (
              <div className="input">
                <img src={person} alt="" />
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            )}
            <div className="input">
              <img src={email} alt="" />
              <input
                type="email"
                placeholder="email"
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
              />
            </div>
            <div className="input">
              <img src={password} alt="" />
              <input
                type="password"
                placeholder="Password"
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
              />
            </div>
          </div>
          <div className="submit-container">
            <div
              className={action === "Login" ? "submit gray" : "submit"}
              onClick={() => {
                console.log("SignUp Button Clicked button clicked");
                setAction("SignUp");
                handleSignUp();
              }}
            >
              Sign Up
            </div>
            <div
              className={action === "SignUp" ? "submit gray" : "submit"}
              onClick={() => {
                console.log("Login button clicked");
                setAction("Login");
                handleLogin();
              }}
            >
              Login
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSignup;
