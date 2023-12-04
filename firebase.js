// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  sendPasswordResetEmail, 
  signInWithPopup, 
  GoogleAuthProvider 
} from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyATe-1a65VuAIGBCdWYp_MFGJOUK1xHwyI",
    authDomain: "my-noma-app-26dfa.firebaseapp.com",
    projectId: "my-noma-app-26dfa",
    storageBucket: "my-noma-app-26dfa.appspot.com",
    messagingSenderId: "91979651",
    appId: "1:91979651:web:6613ae8de469ccc9ec40b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Exporting auth and additional authentication functionalities
export { 
  auth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  sendPasswordResetEmail, 
  signInWithPopup, 
  GoogleAuthProvider 
};
