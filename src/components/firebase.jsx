import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyB6u0uhuiFHUnk_lxjiGMgPuN9lmGbSetY",
    authDomain: "authentication-c2f4a.firebaseapp.com",
    projectId: "authentication-c2f4a",
    storageBucket: "authentication-c2f4a.appspot.com",
    messagingSenderId: "476386167332",
    appId: "1:476386167332:web:41b3c7c843a4f81d0de6b1",
    measurementId: "G-S5LDLKRKMZ"
  };

  const app = initializeApp(firebaseConfig);
 export  const auth= getAuth(app);