// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-9e7c8.firebaseapp.com",
  projectId: "mern-estate-9e7c8",
  storageBucket: "mern-estate-9e7c8.firebasestorage.app",
  messagingSenderId: "234591199899",
  appId: "1:234591199899:web:402abae8959deccb7e9c3e",
  measurementId: "G-FFQX3PYDX0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
