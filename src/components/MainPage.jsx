import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Notes } from "./Notes";

export const MainPage = () => {
  return (
    <>
   <Navbar/>
   <Notes/>
      {/* <div>
        MainPage
        <Link to="/login">login</Link>
      </div> */}
    </>
  );
};
