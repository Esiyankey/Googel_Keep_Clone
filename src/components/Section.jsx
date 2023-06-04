import { useState } from "react";
import { Notes } from "./Notes";
import { SideBar } from "./SideBar";
import "../styles/Section.scss";
import { Outlet } from "react-router";
import { Navbar } from "./Navbar";

export const Section = () => {
  return (
    <>
      <Navbar />
      <div className="Section">
        <SideBar />
        <Outlet />
      </div>
    </>
  );
};
