import React, { useState, useEffect } from "react";
import "./LoginSignup.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import email from "../Components/Assets/email.png";
import password from "../Components/Assets/password.png";
import person from "../Components/Assets/person.png";
import sigin from "./Assets/signin.svg";
import login from "./Assets/login.png";

const LoginSignup = (props) => {
  const [action, setAction] = useState("SignUp");
  const [userName, setName] = useState("");
  const [userMail, setEmailValue] = useState("");
  const [userPassword, setPasswordValue] = useState("");

  useEffect(() => {
    document.title = props.pageTitle;
  }, [props.pageTitle]);

  const handleSignUp = async () => {
    const data = {
      userName: userName,
      userMail: userMail,
      userPassword: userPassword,
    };
    console.log("Data to be sent:", data);

    const url = "http://localhost:5000/api/register"; // Replace with your actual signup API endpoint

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
      userMail: userMail,
      userPassword: userPassword,
    };
    console.log("Data to be sent:", data);

    const url = "http://localhost:5000/api/login"; // Replace with your actual login API endpoint

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
                  value={userName}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            )}
            <div className="input">
              <img src={email} alt="" />
              <input
                type="email"
                placeholder="email"
                value={userMail}
                onChange={(e) => setEmailValue(e.target.value)}
              />
            </div>
            <div className="input">
              <img src={password} alt="" />
              <input
                type="password"
                placeholder="Password"
                value={userPassword}
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