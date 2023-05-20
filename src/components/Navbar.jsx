import React from "react";
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
export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left-navbar">
        <div className="icons bar">
          <HiBars3 className="BarsIcon icon" />
        </div>
        <img src={keepLogo} alt="Keep logo here" />
        <h2>Keep</h2>
      </div>
      <div className="right-navbar">
        <div className="icons">
          <FaSistrix className="icon" />
        </div>
        <div className="icons">
          <IoRefresh className="icon" />
        </div>
        <div className="listicons">
          <div className="icons">
            <BiGridAlt className="icon" />
          </div>
          <div className="icons">
            <CiGrid2H className="icon" />
          </div>
        </div>
        <div className="icons">
          <MdOutlineSettings className="icon" />
        </div>
      </div>
    </div>
  );
};
