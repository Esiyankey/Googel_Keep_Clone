import React, { useState } from "react";
import { Link } from "react-router-dom";
import {FcInfo } from "react-icons/fc";
import "../styles/signup.scss";
export const SignUp = () => {
  const [Fullname, setFullName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleSubmit= (e)=>{
  e.preventDefault();
  }
  return (
    <div className="SignUp">
      <div className="signup-container">
        <h3>Sign up</h3>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"FaAngleDown 
            value={Fullname}
            placeholder="Full name"
            onChange={(e) => {
              setFullName(e.target.value);
            }}
            required
          />
          <input
            type="email"
            value={Email}
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
          <input
            type="password"
            value={Password}
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
          <div className="progress-bar"></div>
          {/* <div className="choose-country">
            <select
              value={selectedOption}
              onChange={(e) => {
                setSelectedOption(e.target.value);
              }}
              className="select"
            >
              <option value="" disabled hidden>
                Select country of residence
              </option>
              <option value="option1" className="option">
                Ghana
              </option>
              <option value="option2" className="option">
                Uganda
              </option>
            </select>
          </div> */}
          <div className="information">
            <FcInfo className="icon"/> <span>This is limited to countries Payplux operates in</span>
          </div>
        </form>
        <button className="signup-btn" type="submit"> Sign Up</button>
        <h5>
         <span>By clicking “Sign Up”, I agree to</span>  Terms of Service <span> and</span> Privacy Policy
        </h5>
      </div>
    </div>
  );
};
