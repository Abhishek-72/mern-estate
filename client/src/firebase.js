// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-5b108.firebaseapp.com",
  projectId: "mern-estate-5b108",
  storageBucket: "mern-estate-5b108.appspot.com",
  messagingSenderId: "875013051246",
  appId: "1:875013051246:web:40f3e21feb952c9f94a77f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
