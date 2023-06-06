import { useState } from "react";
import "../styles/SideBar.scss";
import { Link } from "react-router-dom";
import {
  MdOutlineLightbulb,
  MdLabelOutline,
  MdOutlineArchive,
} from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

export const SideBar = () => {
  const [active, setActive] = useState(null);

  const handleActive = (id) => {
    setActive(id);
  };
  return (
    <div className="Side-Bar">
      <div className="SideBar-Container">
        <div className="sideBar-icons">
          <div className="icons-container">
            <Link to="/home" className="btn ">
              <div
                className={`icons ${active === 0 ? 'active' : ''}`}
                onClick={()=>{handleActive(0)}}
              >
                <MdOutlineLightbulb className="icon" />
                <span>Home</span>
              </div>
            </Link>
            <Link to="/home/label" className="btn">
              <div
                className={`icons ${active === 1 ? 'active' : ''}`}
                onClick={()=>{handleActive(1)}}
              >
                <MdLabelOutline className="icon" />
                <span>Label</span>
              </div>
            </Link>
            <Link to="/home/archive" className="btn">
              <div
                className={`icons ${active === 2 ? 'active' : ''}`}
                onClick={()=>{handleActive(2)}}
              >
                <MdOutlineArchive className="icon" />
                <span>Archive</span>
              </div>
            </Link>
            <Link to="/home/delete" className="btn">
              <div
                className={`icons ${active=== 3 ? 'active' : ''}`}
                onClick={()=>{handleActive(3)}}
              >
                <RiDeleteBin6Line className="icon" />
                <span>Delete</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
