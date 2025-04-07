// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; 
import { getAuth, GoogleAuthProvider } from 'firebase/auth';



// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-fo5MMVZKB0haxknl17LSzOhZ-8L8QxU",
  authDomain: "nidaan-ce74a.firebaseapp.com",
  projectId: "nidaan-ce74a",
  storageBucket: "nidaan-ce74a.appspot.com", // fixed typo (should be .app**spot**.com)
  messagingSenderId: "519953777026",
  appId: "1:519953777026:web:511b7a0f46d35d13aa4f9b",
  measurementId: "G-MM0ZPLZZ5E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export the auth instance
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app); 

// Optional: Initialize analytics (only works in browser environments)
const analytics = getAnalytics(app);
