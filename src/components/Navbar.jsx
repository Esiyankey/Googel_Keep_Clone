import { useState } from "react";
import {
  HiBars3,
  FaSistrix,
  IoRefresh,
  MdOutlineSettings,
  BiGridAlt,
  CiGrid2H,
} from "react-icons/all";
import keepLogo from "../assets/keep-logo2.png";
import "../Styles/Navbar.scss";
import { Link } from "react-router-dom";
export const Navbar = () => {
  const [activeNavbar, SetActiveNavbar] = useState(false);
  const [search, setSearch] = useState(false);
  const [showGrid, setShowGrid] = useState(false);

  const handleShowGrid = () => {
    setShowGrid(true);
  };
  const handleRemoveGrid = () => {
    setShowGrid(false);
  };
  const refreshPage = () => {
    window.location.reload();
  };
  const handleSearchClick = () => {
    setSearch(!search);
  };

  const ChangeBackground = () => {
    if (window.scrollY > 50) {
      SetActiveNavbar(true);
    } else {
      SetActiveNavbar(false);
    }
  };
  window.addEventListener("scroll", ChangeBackground);

  return (
    <div className={activeNavbar ? "navbar active" : "navbar"}>
      <div className="left-navbar">
        <div className="icons bar">
          <HiBars3 className="BarsIcon icon" />
        </div>
        <img src={keepLogo} alt="Keep logo here" />
        <h2>Keep</h2>
      </div>

      <div className="right-navbar">
        <div className="icons fasistrix">
          <input type="text" className="fasistrix-input" placeholder="Search" />
          <FaSistrix
            className="icon fasistrix-icon"
            onClick={handleSearchClick}
          />
        </div>

        <div className="icons">
          <IoRefresh className="icon" onClick={refreshPage} />
        </div>
        <div className="listicons icons">
          <BiGridAlt className="icon grid" onClick={handleShowGrid} />
          <CiGrid2H className="icon cigrid" onClick={handleRemoveGrid} />
        </div>
        <div className="icons">
          <MdOutlineSettings className="icon set" />
        </div>
        <div className="icons islogin">
          <Link to="/login"  style={{  textDecoration: 'none' ,color:"orange" }}>Login</Link>
        </div>
      </div>
    </div>
  );
};
