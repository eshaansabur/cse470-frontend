// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAiciOF69JJ9nSdMb24NOxStiWjsTwI3I",
  authDomain: "cse-470.firebaseapp.com",
  projectId: "cse-470",
  storageBucket: "cse-470.appspot.com",
  messagingSenderId: "279148208801",
  appId: "1:279148208801:web:c69d3ead6d099f1b6486e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export default auth;