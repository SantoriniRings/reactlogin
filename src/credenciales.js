// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9vP2x_NFx2K5MrmUoPwktawd3udoEeZY",
  authDomain: "fir-login-42c3c.firebaseapp.com",
  projectId: "fir-login-42c3c",
  storageBucket: "fir-login-42c3c.appspot.com",
  messagingSenderId: "714914095540",
  appId: "1:714914095540:web:a2ba285653641b707b12e1"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;