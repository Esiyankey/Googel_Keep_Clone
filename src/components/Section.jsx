import { useState } from "react";
import { Notes } from "./Notes";
import { SideBar } from "./SideBar";
import '../styles/Section.scss'

export const Section = () => {
  return (
    <div className="Section">
      <SideBar />
      <Notes />
    </div>
  );
};
