// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// exclude from prettier
const firebaseConfig = {
  apiKey: "AIzaSyA49PGyyZzGlPnsau77v9AQD54q3nY-qnA",
  // apiKey: import.meta.env.VITE_apiKey,
  authDomain: "lama-chat-9adfc.firebaseapp.com",
  projectId: "lama-chat-9adfc",
  storageBucket: "lama-chat-9adfc.appspot.com",
  messagingSenderId: "191633432526",
  appId: "1:191633432526:web:2a2beca858a5d82ff8159f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
