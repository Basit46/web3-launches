import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../../firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const authContext = createContext();
const provider = new GoogleAuthProvider();

const AuthContextProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState({
    uid: null,
    name: null,
    email: null,
  });

  //useEffect to handle user session changes.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserDetails({
          uid: user.uid,
          name: user.displayName,
          email: user.email,
        });
      } else {
        setUserDetails({
          uid: null,
          name: null,
          email: null,
          photoURL: null,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  //Sign in with google
  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUserDetails({
          uid: user.uid,
          name: user.displayName,
          email: user.email,
        });
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  //Sign Out
  const handleSignOut = () => {
    signOut(auth).catch((err) => {
      console.log("Error:", err);
    });
  };

  return (
    <authContext.Provider value={{ userDetails, handleSignIn, handleSignOut }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuthContext = () => {
  return useContext(authContext);
};
