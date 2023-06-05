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
  return (
    <div className="Side-Bar">
      <div className="SideBar-Container">
        <div className="icons-container">
          <Link  to='/home/notes' className="btn ">
            <div className="icons ">
               
              <MdOutlineLightbulb className="icon" />
              <h6>Home</h6>
              
            </div>
          </Link>
          <Link to='/home/label' className="btn">
            <div className="icons">
              <MdLabelOutline className="icon active" />
              <h6>Label</h6>
            </div>
          </Link>
          <Link to='/home/archive' className="btn">
            <div className="icons">
              <MdOutlineArchive className="icon" />
              <h6>Archive</h6>
            </div>
          </Link>
          <Link to='/home/delete' className="btn">
            <div className="icons">
              <RiDeleteBin6Line className="icon" />
              <h6>Delete</h6>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
