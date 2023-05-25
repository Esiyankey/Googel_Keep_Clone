import { useState, useEffect } from "react";
import { Login } from "./components/Login";
import { SignIn } from "./components/SignIn";
import { MainApp } from "./components/MainApp";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./components/firebase";
function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <Router>
          <Routes>
            <Route path="/" element={<MainApp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signIn" element={<SignIn />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
// const Root = () => {

//   const [loggedIn, setLoggedIn] = useState(false);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setLoggedIn(true);
//       } else {
//         setLoggedIn(false);
//       }
//     });

//     // Clean up the subscription
//     return () => unsubscribe();
//   }, []);
//     // Clean up the subscription

//   return (
//     <>

//       <div>
//         <Routes>
//           <Route path="/login" element={  <Login />} />
//           <Route path="/signin" element={  <SignIn />} />
//         </Routes>
//       </div>
//       <MainApp />

//     </>
//   );
// };
