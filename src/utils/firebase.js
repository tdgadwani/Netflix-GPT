// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeEj23MpVm_fNQJY9bwOfZw9f-4c-PIlY",
  authDomain: "netflixgpt-3b932.firebaseapp.com",
  projectId: "netflixgpt-3b932",
  storageBucket: "netflixgpt-3b932.appspot.com",
  messagingSenderId: "942178408560",
  appId: "1:942178408560:web:f8dee0061e263edafb7cb5",
  measurementId: "G-M64EX34TQQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();