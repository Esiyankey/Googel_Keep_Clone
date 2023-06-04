import { useState } from "react";
import { Notes } from "./Notes";
import { SideBar } from "./SideBar";

export const Section = () => {
  return (
    <div className="Section">
      <SideBar />
      <Notes />
    </div>
  );
};
