import React from "react";
import "../Styles/mainContainer.scss";
import {
  AiOutlineBulb,
  MdLabelOutline,
  RiPencilLine,
  RiInboxArchiveLine,
  RiDeleteBin6Line,
} from "react-icons/all";
export const MainSection = () => {
  return (
    <div className="main-container">
      <div className="left-icons">
        <div className="left-iconsdiv">
          <AiOutlineBulb />
          <h4>notes</h4>
        </div>
        <div className="left-iconsdiv">
          <MdLabelOutline />
          <h4>label</h4>
        </div>
        <div className="left-iconsdiv">
          <RiPencilLine />
          <h4>Edit label</h4>
        </div>
        <div className="left-iconsdiv">
          <RiInboxArchiveLine />
          <h4>Archive</h4>
        </div>
        <div className="left-iconsdiv">
          <RiDeleteBin6Line />
          <h4>Bin</h4>
        </div>
      </div>
      <div className="take-notes">
        
      </div>
    </div>
  );
};
