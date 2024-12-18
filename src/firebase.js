// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCp7Dqn3eRuOhl-6qv0o3bOX8m0DbjSKDg",
  authDomain: "dtlproject-919b1.firebaseapp.com",
  projectId: "dtlproject-919b1",
  storageBucket: "dtlproject-919b1.firebasestorage.app",
  messagingSenderId: "951859416108",
  appId: "1:951859416108:web:682e16a5a1ee08faef5589",
  measurementId: "G-2CQ39MV7NW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);