import { useState, useEffect } from "react";
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";
import { createBrowserRouter,RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    { path: "/signup", element: <SignUp /> },
    {path:"/login",element:<Login/>},
  ]);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
