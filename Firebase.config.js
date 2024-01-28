// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsoKMEMdIurfWzJBgXt_vrZ7kOqG6205E",
  authDomain: "fir-auth-613f3.firebaseapp.com",
  projectId: "fir-auth-613f3",
  storageBucket: "fir-auth-613f3.appspot.com",
  messagingSenderId: "787994923917",
  appId: "1:787994923917:web:1fdf1f35cba40acc1123c4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
