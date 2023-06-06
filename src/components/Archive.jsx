import React from "react";
import { MdOutlineArchive } from "react-icons/md";
import '../styles/archives.scss'

export const Archive = () => {
  return (
    <div className="archive">
      <div className="archive-background">
        <MdOutlineArchive className="archive-icon"/>
        <h3 className="archive-text">Your archives show here</h3>
      </div>
    </div>
  );
};
