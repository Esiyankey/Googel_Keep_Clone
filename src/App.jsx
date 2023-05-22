import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { MainSection } from "./components/MainSection";
import { Login } from "./components/Login";

function App() {
  return (
    <>
      <Login />
      <Navbar />
      <MainSection />
    </>
  );
}

export default App;
