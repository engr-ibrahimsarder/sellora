/* eslint-disable react/prop-types */
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  //user create function
  const createUser = (email, password) => {
    setLoading(false);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // user signIn function
  const signIn = (email, password) => {
    setLoading(false);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // user googleSignIn
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  // user logout function
  const logOut = () => {
    setLoading(false);
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe;
    };
  }, []);
  const infoData = {
    user,
    loading,
    createUser,
    signIn,
    googleSignIn,
    logOut,
  };
  return (
    <AuthContext.Provider value={infoData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
