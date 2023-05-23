import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { MainSection } from "./components/MainSection";
import { Login } from "./components/Login";
import { SignIn } from "./components/SignIn";

function App() {
  return (
    <>
      <Login />
      <SignIn/>
      <Navbar />
      <MainSection />
    </>
  );
}

export default App;
