import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../Firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const emailLogin = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  const authentication = {
    googleLogin,
    emailLogin,
    signIn,
    logOut,
    user,
  };

  return (
    <>
      <AuthContext.Provider value={authentication}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
