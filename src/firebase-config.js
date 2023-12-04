// src/utils/firebase-config.js
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
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyATe-1a65VuAIGBCdWYp_MFGJOUK1xHwyI",
  authDomain: "my-noma-app-26dfa.firebaseapp.com",
  projectId: "my-noma-app-26dfa",
  storageBucket: "my-noma-app-26dfa.appspot.com",
  messagingSenderId: "91979651",
  appId: "1:91979651:web:6613ae8de469ccc9ec40b6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  signInWithPopup,
  GoogleAuthProvider
};