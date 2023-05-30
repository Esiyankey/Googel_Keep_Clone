import { useState, useEffect } from "react";
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { MainPage } from "./components/MainPage";

function App() {
  const router = createBrowserRouter([
    { path: "/signup", element: <SignUp /> },
    {path:"/login",element:<Login/>},
    {path:"/mainpage",element:<MainPage/>}
  ]);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
