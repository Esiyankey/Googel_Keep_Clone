import { useState } from "react";
import "../styles/Login.scss";
import { Link } from "react-router-dom";
import { auth } from "../config/Firebase";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { signInWithEmailAndPassword } from "firebase/auth";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //handlepassword
  const handleShowPassword = () => {
    setShowPassword(false);
  };
  const handleHidePassword = () => {
    setShowPassword(true);
  };

  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //Login function
  const Login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error.message);
      alert("email or password is incorrect ");
    }
  };

  return (
    <div className="Login">
      <div className="login-container">
        <h3>Sign in</h3>
        <p>
          Enter your details below. New to Payplux?{" "}
          <Link to="/signup">Sign Up</Link>
        </p>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type={showPassword?"text":"password"}
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <span>
            {showPassword ? 
              <FiEye className="eyeon-icon on" onClick={handleShowPassword} />
             : 
              <FiEyeOff className="eyeon-icon eye-off" onClick={handleHidePassword} />
            }
          </span>
          <button className="btn" type="submit" onClick={Login}>
            Log In
          </button>
        </form>
        <h5>
          {" "}
          <a href="#">Forgot Password?</a>{" "}
        </h5>
      </div>
    </div>
  );
};
