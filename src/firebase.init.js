// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAD0o_MwE-sHT_8LigYXXkuvroFVNOQ0gI",
  authDomain: "easy-mart-9ee7f.firebaseapp.com",
  projectId: "easy-mart-9ee7f",
  storageBucket: "easy-mart-9ee7f.appspot.com",
  messagingSenderId: "836233071371",
  appId: "1:836233071371:web:3c882b96373893f0ecb00e",
  measurementId: "G-10WQ0M0L51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 
const auth = getAuth(app);
export default auth;