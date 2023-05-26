import { useState, useEffect } from "react";
import { Login } from "./components/Login";
import { SignIn } from "./components/SignIn";
import { MainApp } from "./components/MainApp";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./components/firebase";
function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = () => {
    setLoggedIn(true);
  };
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? <MainApp /> : <Login handleLogin={handleLogin} />
            }
          />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/mainapp" element={<MainApp />} /> 
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
