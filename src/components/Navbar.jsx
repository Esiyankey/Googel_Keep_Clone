import { useState } from "react";
import { FaBars, FaSistrix } from "react-icons/fa";
import KeepLogo2 from "../assets/keep-logo2.png";
import { auth } from "../config/Firebase";
import { signOut } from "firebase/auth";
import { CiGrid2H } from "react-icons/ci";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import "../styles/Navbar.scss";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [search, setSearch] = useState("");
  const [logOut, setLogOut] = useState(false);

  const navigate = useNavigate();
  //Log Out
  const handleLogOut = () => {
    const LogOut = async () => {
      try {
        await auth.signOut();
        navigate("/login")
      } catch (error) {
        alert("error loggin out");
        console.log(error);
      }
    };
    LogOut();
  };

//refresh
const refreshPage = () => {
  window.location.reload();
};

  //Drop Down

  const showDropdown = () => {
    setLogOut(!logOut);
  };
  return (
    <div className="Navbar">
      <div className="Left-Navbar">
        <button className="btn">
          <FaBars />
        </button>
        <img src={KeepLogo2} alt="Keep-Logo here" className="keep-image" />
        <h4>Keep</h4>
      </div>
      <div className="Center-Navbar">
        <FaSistrix className="icon" />
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <div className="right-Navbar">
        <div className="Grid" type="button">
          {/* <IoGridOutline /> */}
          <button className="btn">
            <CiGrid2H />
          </button>
        </div>
        <div className="drop-down">
          <button className="btn" onClick={showDropdown}>
            <BsFillGrid3X3GapFill />
          </button>
          {logOut && (
            <div className="log-out" onClick={handleLogOut}>
              Log Out
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
