import { useState } from "react";
import { FaBars, FaSistrix } from "react-icons/fa";
import keepLogo2 from '../assets/keep-logo2.png';
import { MdSettings } from "react-icons/md";
// import { IoGridOutline } from "react-icons/io";
import { CiGrid2H } from "react-icons/ci";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import '../styles/Navbar.scss'

export const Navbar = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="Navbar">
      <div className="Left-Navbar">
        <FaBars />
        <img src={KeepLogo2} alt="" />
        <h4>Keep</h4>
      </div>
      <div className="Center-Navbar">
        <FaSistrix />
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <div className="right-Navbar">
        <MdSettings />
        <div className="Grid">
          {/* <IoGridOutline /> */}
          <CiGrid2H />
        </div>
        <BsFillGrid3X3GapFill />
      </div>
    </div>
  );
};
