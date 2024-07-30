// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8o8xaOymNb5wqSKN58dVMjnNZN2yF6kI",
  authDomain: "video-conferencing-5e086.firebaseapp.com",
  projectId: "video-conferencing-5e086",
  storageBucket: "video-conferencing-5e086.appspot.com",
  messagingSenderId: "711848539589",
  appId: "1:711848539589:web:22900b65d004a44df407ac",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const signUp = document.getElementById("");
