import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { createContext } from "react";
import { auth } from "../../Firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const emailLogin = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authentication = {
    googleLogin,
    emailLogin,
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
