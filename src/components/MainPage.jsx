import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Section } from "./Section";


export const MainPage = () => {
  return (
    <>
   <Navbar/>
   <Section/>
      {/* <div>
        MainPage
        <Link to="/login">login</Link>
      </div> */}
    </>
  );
};
