import React, { useState, useEffect } from "react";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";

export function SignIn() {
  function signInWithGoogle() {
    signInWithPopup(auth, new GoogleAuthProvider());
  }
  return <div className="signin"></div>;
}

export function SignOut() {
  return (
    auth.currentUser && (
      <p className="mb1">
        {auth.currentUser.displayName}&nbsp;
        <a
          onClick={() => {
            signOut(auth);
          }}
        >
          Sign Out
        </a>
      </p>
    )
  );
}

export function useAuthentication() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    return auth.onAuthStateChanged((user) => {
      user ? setUser(user) : setUser(null);
    });
  }, []);
  return user;
}
