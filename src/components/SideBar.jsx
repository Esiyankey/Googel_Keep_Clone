import { useState } from "react";
import "../styles/SideBar.scss";
import { createBrowserRouter,Route } from "react-router-dom";
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
          <button className="btn">
            <MdOutlineLightbulb className="icon" />
          </button>
          <button className="btn">
            <MdLabelOutline className="icon" />
          </button>
          <button className="btn">
            <MdOutlineArchive className="icon" />
          </button>
          <button className="btn">
            <RiDeleteBin6Line className="icon" />
          </button>
        </div>
      </div>
    </div>
  );
};
