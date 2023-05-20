import React from "react";
import "../Styles/mainContainer.scss";
import {
  AiOutlineBulb,
  MdLabelOutline,
  RiPencilLine,
  RiInboxArchiveLine,
  RiDeleteBin6Line,
} from "react-icons/all";
export const MainContainer = () => {
  return (
    <div className="main-container">
      <div className="left-icons">
        <AiOutlineBulb />
        <MdLabelOutline />
        <RiPencilLine />
        <RiInboxArchiveLine />
        <RiDeleteBin6Line />
      </div>
      <div className="take-notes"></div>
    </div>
  );
};
