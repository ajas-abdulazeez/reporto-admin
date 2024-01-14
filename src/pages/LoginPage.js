import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import LandingPageHeader from "../components/Header/LandingPageHeader";
import PostRequest from '../Service/PostRequest'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const [username,setUsername ] = useState("")
  const [password,setPassword ]=useState("")
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin= async ()=>{
      setUsernameError("");
      setPasswordError("");
        // Perform validations
      let isValid = true;

      if (!username.trim()) {
        setUsernameError("Username is required");
        isValid = false;
      }

      if (!password.trim()) {
        setPasswordError("Password is required");
        isValid = false;
      }

      if (isValid) {
      await PostRequest('http://localhost:8080/api/v1/auth/user/login', { userName: username,password:password })
      .then(data => {
        console.log(data);
          localStorage.setItem("isLoggedIn", true);
          localStorage.setItem("authorityId", data.authorityId);
          localStorage.setItem("responsibility", data.responsibility);
          localStorage.setItem("authorityName", data.authorityName);
          localStorage.setItem("authoritiesList",data.authoritiesList);
          if(data.authorityId !== null) {
            navigate("/");
          }
      })
      
  }; }

  return (
    <>
      <div>
        <LandingPageHeader/>
        <br />
        <br />
        <div className="main_container">
          <div className="slogenbox">
            <div className="slogen1"> Reporto Admin </div>
            <br />
            <div className="horizontal-line"></div>
            <div className="slogen2">
              {" "}
              "Legacy version 1.2"{" "}
            </div>
          </div>
          <div className="loginbox">
            <div className="login-box-wrap">
              <br />
              <br />
              Login
              <br />
              <br />

              <input
                type="text"
                name="username"
                className={`bottom-border ${passwordError ? "input-error" : ""}`}
                placeholder="Username"
                value={username} onChange={(e) => {
                  setUsername(e.target.value);
                  setUsernameError(""); // Clear error when typing
                }} required
              ></input>
              {usernameError && <div className="error-message">{usernameError}</div>}

              <br />
              <br />
              <input
                type="password"
                name="password"
                className={`bottom-border ${passwordError ? "input-error" : ""}`}
                placeholder="Password"
                value={password} onChange={(e) => {
                  setPassword(e.target.value);
                  setPasswordError(""); // Clear error when typing
                }} require
              ></input>
              {passwordError && <div className="error-message">{passwordError}</div>}
              
              <div className="submit-btn" onClick={handleLogin}>
                Login
              </div>
              <br />
                            <br /> <br /> <br />
            </div>
          </div>
        </div>
        <ToastContainer closeButton={false}/>
      </div>
    </>
  );
};

export default LoginPage;