// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJ2IvV-aXKROadBJG0oabfgdwMmVLmh5s",
  authDomain: "cafe-strret.firebaseapp.com",
  projectId: "cafe-strret",
  storageBucket: "cafe-strret.appspot.com",
  messagingSenderId: "585005902573",
  appId: "1:585005902573:web:7a4bd30bbd2229872cfae4",
  measurementId: "G-JB2ELV7ST1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);