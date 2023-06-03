import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CgDanger } from "react-icons/cg";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { auth } from "../config/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "../styles/signup.scss";
import { Loading } from "./Loading";

export const SignUp = () => {
  const [Fullname, setFullName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [strength, setStrength] = useState(0);
  const [focused, setFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error,setError]=useState("")
  //check password strength

  const checkPasswordStrength = (value) => {
    setPassword(value);

    // Password length validation
    if (value.length < 8) {
      setStrength(0);
      return;
    }

    // Character requirements
    const requirements = {
      lowercase: /[a-z]/,
      uppercase: /[A-Z]/,
      digit: /[0-9]/,
      special: /[!@#$%^&*]/,
    };

    let strengthCount = 0;
    for (const rule in requirements) {
      if (requirements[rule].test(value)) {
        strengthCount++;
      }
    }

    // Update the password strength level
    setStrength((strengthCount / Object.keys(requirements).length) * 100);
    setFocused(false);
  };

  //handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //getting the color

  const getColor = () => {
    const colorRange = [
      { strength: 0, color: "#ADD8E6" },
      { strength: 25, color: "#800000" },
      { strength: 50, color: "#FFAE42" },
      { strength: 75, color: "#FDDC5C" },
      { strength: 100, color: "gray" },
    ];

    for (let i = 0; i < colorRange.length - 1; i++) {
      if (
        strength >= colorRange[i].strength &&
        strength < colorRange[i + 1].strength
      ) {
        return colorRange[i].color;
      }
    }

    return colorRange[colorRange.length - 1].color;
  };

  const navigate = useNavigate();
  //function for signing up
  const signup = async () => {
    try {
      setIsLoading(true);
      await createUserWithEmailAndPassword(auth, Email, Password);
      navigate("/mainpage");
    } catch (error) {
      console.error(error.message);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="SignUp">
      <div className="signup-container">
        <h3>Sign up</h3>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
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
          <div className="password-input">
            <input
              type={showPassword ? "password" : "text"}
              value={Password}
              placeholder="Password"
              onChange={(e) => checkPasswordStrength(e.target.value)}
              required
              onFocus={() => {
                setFocused(true);
              }}
              
            />
            <button
              className="btn"
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? (
                <FiEyeOff className="eye-icon off" />
              ) : (
                <FiEye className="eye-icon eye" />
              )}
            </button>
          </div>
          <div className="progress-bar">
            <div
              style={{
                width: `${strength}%`,
                height: "5px",
                borderRadius: "4px",
                backgroundColor: getColor(),
                marginTop: "5px",
                transition: "width 0.3s",
              }}
            ></div>
          </div>
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
          {focused ? (
            <div className="information">
              <CgDanger className="icon" />{" "}
              <span>
                Password must be more than 8 characters and should contain
                uppercase ,lowercase, special characters and numbers
              </span>
            </div>
          ) : (
            ""
          )}
        </form>
        <button className="signup-btn" type="submit" onClick={signup}>
          {" "}
        {isLoading? <Loading/>:"Sign Up"}
        </button>
        {error && <div className="error-message">{error}</div>}
        <h5>
          <span>By clicking “Sign Up”, I agree to</span> Terms of Service{" "}
          <span> and</span> Privacy Policy
        </h5>
      </div>
    </div>
  );
};
