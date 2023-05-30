// import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// import {getFirestore} from "firebase/firestore";
// const firebaseConfig = {
//     apiKey: "AIzaSyB6u0uhuiFHUnk_lxjiGMgPuN9lmGbSetY",
//     authDomain: "authentication-c2f4a.firebaseapp.com",
//     projectId: "authentication-c2f4a",
//     storageBucket: "authentication-c2f4a.appspot.com",
//     messagingSenderId: "476386167332",
//     appId: "1:476386167332:web:41b3c7c843a4f81d0de6b1",
//     measurementId: "G-S5LDLKRKMZ"
//   };

//   const app = initializeApp(firebaseConfig);
//  export const db =getFirestore(app);
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBz5qgfceJIvkD4PXPO8q4PenoNWYC_ZoM",
  authDomain: "keep-ddae4.firebaseapp.com",
  projectId: "keep-ddae4",
  storageBucket: "keep-ddae4.appspot.com",
  messagingSenderId: "746711274460",
  appId: "1:746711274460:web:e7430f3ad48304c1553519",
  measurementId: "G-VMF5FP2PV6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth= getAuth(app);