import React from "react";
import '../styles/label.scss'
import { MdLabelOutline } from "react-icons/md";
export const Label = () => {
  return (
    <div className="label">
      <div className="label-background">
        <MdLabelOutline className="label-icon" />
        <h3 className="label-text">Your deleted items show here</h3>
      </div>
    </div>
  );
};
