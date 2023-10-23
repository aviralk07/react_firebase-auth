import { signInWithEmailAndPassword } from "firebase/auth";

import Button from "react-bootstrap/Button";
import React, { useState } from "react";
// import { auth } from "../../firebase";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");const firebaseConfig = {
    apiKey: "AIzaSyC_pViQMa0hj7h4a8TfGLA1tPmB9fFoV1Q",
    authDomain: "react-auth-tut-d9195.firebaseapp.com",
    projectId: "react-auth-tut-d9195",
    storageBucket: "react-auth-tut-d9195.appspot.com",
    messagingSenderId: "468316024615",
    appId: "1:468316024615:web:a2d089f2440307358a8302",
  };

  const app = initializeApp(firebaseConfig);
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(getAuth(app), email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="sign-in-container">
      <form action="" onSubmit={signIn}>
        <h1>Log In</h1>
        <input
          type="email"
          placeholder="Enter your email "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name=""
          id=""
        />
        <input
          type="password"
          value={password}
          placeholder="Enter the password"
          onChange={(e) => setPassword(e.target.value)}
          name=""
          id=""
        />
        <Button variant="success" type="submit">
          Login
        </Button>{" "}
      </form>
    </div>
  );
};

export default SignIn;
