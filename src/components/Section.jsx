import { useState } from "react";
import { Notes } from "./Notes";
import { SideBar } from "./SideBar";
import "../styles/Section.scss";
import { Outlet } from "react-router";
import { Navbar } from "./Navbar";
import { Toaster } from 'react-hot-toast';
export const Section = () => {
  return (
    <>
    <div><Toaster/></div>
      <Navbar />
      <div className="Section">
        <SideBar />
        <Outlet />
      </div>
    </>
  );
};
