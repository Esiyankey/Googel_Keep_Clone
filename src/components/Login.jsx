import {useState} from "react";
import "../Styles/login.scss";
import { FcGoogle } from "react-icons/all";
import {auth} from "./firebase"
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
 

  const Login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
     
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="login">
      <div className="image">
        <img
          src="https://cdn.dribbble.com/users/308682/screenshots/16316303/media/778ab76b5c08e7efbda4613c97b2f290.png"
          alt="image here"
        />
      </div>
      <div className="Login-div">
        <form action="" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className="login-input">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p>Forgot Password?</p>
          <button type="submit" className="login-btn" onClick={Login}>
            Login
          </button>
         
          
          <h3 className="Or">
            .....................................OR.....................................
          </h3>
          <button className="Login-withGoogle">
            <FcGoogle className="google" />
            <h3>Login with Google</h3>
          </button>
          <small>
            Don't have an Account? <Link to="/SignIn">Sign Up</Link>
          </small>
        </form>
      </div>
    </div>
  );
};
