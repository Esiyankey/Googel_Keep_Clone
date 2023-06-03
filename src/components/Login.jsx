import { useState } from "react";
import "../styles/Login.scss";
import { auth } from "../config/Firebase";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { Loading } from "./Loading";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  

  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const navigate = useNavigate();
  //Login function
  const Login = async () => {
    try {
      setIsLoading(true)
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/mainpage");
    } catch (error) {
      setIsLoading(false)
      console.error(error.message);
      setError(error.message);
    }
    // finally{
    // }
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
          <div className="password-input">
            <input
              type={showPassword ? "password" : "text"}
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button
              className="btn-eye"
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? (
                <FiEyeOff className="eyeon-icon eye-off" />
              ) : (
                <FiEye className="eyeon-icon on" />
              )}
            </button>
          </div>
          <button className="btn" type="submit" onClick={Login}>
          {isLoading? <Loading/>:"Log In"}
          </button>
          {error && <div className="error-message">{error}</div>}
        </form>

        <h5>
          {" "}
          <a href="#">Forgot Password?</a>{" "}
        </h5>
        
      </div>
    </div>
  );
};
