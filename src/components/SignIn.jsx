import { useState } from "react";
import "../Styles/signup.scss";
export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const handleValidate = () => {
    if (!email) {
      setError("please enter your email");
    }
    if (!password) {
      setError("please enter your password");
    }
    if (!confirmPassword) {
      setError("please confirm password");
    }
    if (!fullName) {
      setError("please enter your full Name");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidate) {
      setConfirmPassword("");
      setEmail("");
      setFullName("");
      setPassword("");
      setError('')
    }
    // else{
    //   setIsFormValid(false)
    // }

  };

  return (
    <div className="sign-in">
      <div className="sign-container">
        
      </div>
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
              type="text"
              placeholder="Full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          {error && <div>{error}</div>}
          <button type="submit"  className="login-btn">
            Sign up
          </button>
          <small>
            Already have an Account? <a href="#">Login</a>
          </small>
        </form>
      </div>
    </div>
  );
};
