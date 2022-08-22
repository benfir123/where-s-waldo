// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "./firestore/";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Import the functions you need from the SDKs you need

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXJQL5sQF63KDhmfD283EL961JP1tEOus",
  authDomain: "where-s-waldo-2.firebaseapp.com",
  projectId: "where-s-waldo-2",
  storageBucket: "where-s-waldo-2.appspot.com",
  messagingSenderId: "738017764522",
  appId: "1:738017764522:web:9524ae0d4a8dbaa523dcd3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
