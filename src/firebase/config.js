// firebase/config.js

// Import necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics"; // optional for web analytics

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-fo5MMVZKB0haxknl17LSzOhZ-8L8QxU",
  authDomain: "nidaan-ce74a.firebaseapp.com",
  projectId: "nidaan-ce74a",
  storageBucket: "nidaan-ce74a.appspot.com",
  messagingSenderId: "519953777026",
  appId: "1:519953777026:web:511b7a0f46d35d13aa4f9b",
  measurementId: "G-MM0ZPLZZ5E"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Firebase Authentication and Google Provider
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Firestore Database
export const db = getFirestore(app);

// Optional: Initialize analytics (only if supported & in browser)
isSupported().then((supported) => {
  if (supported) {
    getAnalytics(app);
  }
});
