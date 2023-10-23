// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_pViQMa0hj7h4a8TfGLA1tPmB9fFoV1Q",
  authDomain: "react-auth-tut-d9195.firebaseapp.com",
  projectId: "react-auth-tut-d9195",
  storageBucket: "react-auth-tut-d9195.appspot.com",
  messagingSenderId: "468316024615",
  appId: "1:468316024615:web:a2d089f2440307358a8302",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
