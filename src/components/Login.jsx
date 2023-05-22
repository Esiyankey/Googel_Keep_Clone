import React from "react";
import "../Styles/login.scss";
import { FcGoogle } from "react-icons/all";
export const Login = () => {
  return (
    <div className="login">
      <div className="image">
        <img
          src="https://cdn.dribbble.com/users/308682/screenshots/16316303/media/778ab76b5c08e7efbda4613c97b2f290.png"
          alt="image here"
        />
      </div>
      <div className="Login-div">
        <h2>Login</h2>
        <div className="login-input">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </div>
        <p>Forgot Password?</p>
        <button type="submit" className="login-btn">Login</button>
        <h3 className="Or">.....................................OR.....................................</h3>
        <button className="Login-withGoogle">
          <FcGoogle className="google"/>
          <h3>Login with Google</h3>
        </button>
        <small>
          Don't have an Account? <a href="#">Sign Up</a>
        </small>
      </div>
    </div>
  );
};
