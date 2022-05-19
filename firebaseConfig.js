// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaVdJIwJc28vCe24wPYzrHt__sp3MZ69s",
  authDomain: "nutripal-5d80e.firebaseapp.com",
  projectId: "nutripal-5d80e",
  storageBucket: "nutripal-5d80e.appspot.com",
  messagingSenderId: "931825999184",
  appId: "1:931825999184:web:fe2c1415735f8b8a846055",
  measurementId: "G-0366PFYQ81",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export { auth, db };
