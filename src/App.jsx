import { useState, useEffect } from "react";
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";
import { createBrowserRouter,RouterProvider,} from "react-router-dom";
import { MainPage } from "./components/MainPage";
import { Section } from "./components/Section";
import { Notes } from "./components/Notes";
import {Label } from './components/Label';
import {Archive} from './components/Archive';
import {Delete} from './components/Delete';

function App() {
  const router = createBrowserRouter([
    { path: "/signup", element: <SignUp /> },
    {path:"/",element:<Login/>},
    {path:"/login",element:<Login/>},
    // {path:"/mainpage",element:<MainPage/>},
    {path:"/home",element:<Section/>,
    children: [
      {
        path: 'notes',
        index: true,
        element: <Notes/>,
      }, 
      {
        path: "archive",
        element: <Archive />,
      },
      {
        path: "label",
        element: <Label />,
      },
      {
        path: "delete",
        element: <Delete/>,
      },
    ],
  },
    
  ]);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
