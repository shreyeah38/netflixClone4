// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBSNduG5ub0n-Wjt4E-ln48SCxRVXfu0Pw",
  authDomain: "react-netflix-clone-9af27.firebaseapp.com",
  projectId: "react-netflix-clone-9af27",
  storageBucket: "react-netflix-clone-9af27.appspot.com",
  messagingSenderId: "1002434527093",
  appId: "1:1002434527093:web:bed93fbb758342ca2f9d3c",
  measurementId: "G-CX4WZ87NNG"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);