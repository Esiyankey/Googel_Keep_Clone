import React, { useState } from "react";
import "../Styles/mainContainer.scss";

import {
  AiOutlineBulb,
  MdLabelOutline,
  RiPencilLine,
  RiInboxArchiveLine,
  RiDeleteBin6Line
} from "react-icons/all";
import { Notes } from "./Notes";
export const MainSection = () => {
  const [sideBarActive, setSideBarActive] = useState(false);
  const [click, setClick] = useState(false);
  const handleClick = (index) => {
    setClick(index);
  };
  const handleHover = () => {
    setSideBarActive(true);
  };
  const handleHoverInactive = () => {
    setSideBarActive(false);
  };

  return (
    <div className="main-container">
      <div
        className={sideBarActive ? "left-icons active" : "left-icons"}
        onMouseLeave={handleHoverInactive}
      >
        <div className="left-iconsdiv">
          <div
            className={click === 0 ? "iconsdiv Clicked" : "iconsdiv"}
            onClick={() => handleClick(0)}
            onMouseEnter={handleHover}
          >
            <AiOutlineBulb className="iconleft" />
            <h4>notes</h4>
          </div>
        </div>
        <div className="left-iconsdiv">
          <div
            className={click === 1 ? "iconsdiv Clicked" : "iconsdiv"}
            onClick={() => handleClick(1)}
            onMouseEnter={handleHover}
          >
            <MdLabelOutline className="iconleft" />
            <h4>label</h4>
          </div>
        </div>
        <div
          className={click === 2 ? "left-iconsdiv Clicked" : "left-iconsdiv"}
          onClick={() => handleClick(2)}
          onMouseEnter={handleHover}
        >
          <div className="iconsdiv">
            <RiPencilLine className="iconleft" />
            <h4>Edit label</h4>
          </div>
        </div>
        <div className="left-iconsdiv">
          <div
            className={click === 3 ? "iconsdiv Clicked" : "iconsdiv"}
            onClick={() => handleClick(3)}
            onMouseEnter={handleHover}
          >
            <RiInboxArchiveLine className="iconleft" />
            <h4>Archive</h4>
          </div>
        </div>
        <div className="left-iconsdiv">
          <div
            className={click === 4 ? "iconsdiv Clicked" : "iconsdiv"}
            onClick={() => handleClick(4)}
            onMouseEnter={handleHover}
          >
            <RiDeleteBin6Line className="iconleft" />
            <h4>Bin</h4>
          </div>
        </div>
      </div>
      <Notes/>
    </div>
  );
};
