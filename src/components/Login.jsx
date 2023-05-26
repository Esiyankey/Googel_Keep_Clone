import { useState } from "react";
import "../Styles/login.scss";
import { FcGoogle } from "react-icons/all";
import { auth } from "./firebase";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const Login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      navigate("/mainapp");
    } catch (error) {
      alert(error.message);
      console.log(error.message);
    }
  };
  return (
    <div className="login">
      <div className="login-card">
        <div className="image" style={{ textAlign: "center" }}>
          <img
            src="https://images.rawpixel.com/image_png_200/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjc4M2JhdGNoNS1hZXctMjAucG5n.png"
            alt="image here"
          />
        </div>
        <div className="Login-div">
          <form action="" onSubmit={handleSubmit}>
            <h2 style={{ paddingBottom: "0" }}>Welcome back</h2>
            <h5 style={{ paddingBottom: "2rem", fontSize: "1rem" }}>
              Welcome back! please enter your details
            </h5>
            <div className="login-input">
              <label for="email">Email</label>
              <input
                // style={{border:"0.13rem solid #f4f5f6",borderRadius:"0.2rem", padding:"0.6rem", fontSize:"0.8rem",marginBottom:"2rem"}}
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="password">Password</label>
              <input
                // style={{border:"0.13rem solid #f4f5f6",borderRadius:"0.2rem", padding:"0.6rem", fontSize:"0.8rem"}}
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
              .........................OR Login with Google.........................
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
    </div>
  );
};
