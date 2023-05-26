import { useState } from "react";
import "../Styles/signup.scss";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [fullname, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const SignIn = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password,fullname);
      navigate("/mainapp");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="sign-in">
      <div className="sign-container">
        <div className="img">
          <img
          className="image-here"
            src="https://images.rawpixel.com/image_png_200/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjc4M2JhdGNoNS1hZXctMjAucG5n.png"
            alt="image here"
          />
        </div>
        <div className="Login-div">
          <form action="" onSubmit={handleSubmit}>
            <h2 className="h2">Create an account</h2>
            <h5 className="h5">Sign up now and unlock exclusive access</h5>
            <div className="login-input">

            <label htmlFor="text">Full Name</label>
              <input
              className="input-here"
                type="text"
                placeholder="Full Name"
                value={fullname}
                onChange={(e) => setFullName(e.target.value)}
              />

              <label htmlFor="email">Email</label>
              <input
              className="input-here"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label htmlFor="password">Password</label>
              <input
              className="input-here"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="login-btn" onClick={SignIn}>
              Create Account
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
