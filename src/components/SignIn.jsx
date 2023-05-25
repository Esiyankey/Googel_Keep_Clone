import { useState } from "react";
import "../Styles/signup.scss";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const SignIn = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="sign-in">
      <div className="sign-container">
        <div className="image">
          <img
            src="https://cdn.dribbble.com/users/308682/screenshots/16316303/media/778ab76b5c08e7efbda4613c97b2f290.png"
            alt="image here"
          />
        </div>
        <div className="Login-div">
          <form action="" onSubmit={handleSubmit}>
            <h2>Sign up</h2>
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

            <button type="submit" className="login-btn" onClick={SignIn}>
              Sign up
            </button>
            <small>
              Already Have an Account? <Link to="/Login">Login</Link>
            </small>
          </form>
        </div>
      </div>
    </div>
  );
};
