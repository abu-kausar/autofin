// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwcMEOCd4BwlVG4Q9Joned4vRlu3X-ZpY",
  authDomain: "autofin-759fe.firebaseapp.com",
  projectId: "autofin-759fe",
  storageBucket: "autofin-759fe.appspot.com",
  messagingSenderId: "230881311740",
  appId: "1:230881311740:web:525beb1c8560ccb8fe1079",
  measurementId: "G-RFF4BH292D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app);
export default auth;