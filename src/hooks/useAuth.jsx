// src/hooks/useAuth.jsx
import { createContext, useContext, useState, useEffect } from 'react';
import {
  auth,
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  sendPasswordResetEmail, 
  signInWithPopup, 
  GoogleAuthProvider 
} from '../firebase-config';  

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // onAuthStateChanged is a listener for auth state changes
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    // Clean up the listener when the component unmounts
    return unsubscribe; 
  }, []);

  // Define your auth functions using the auth instance from firebase-config
  const signUpWithEmail = (email, password) => 
    createUserWithEmailAndPassword(auth, email, password);

  const signInWithEmail = (email, password) => 
    signInWithEmailAndPassword(auth, email, password);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const logout = () => signOut(auth);

  const forgotPassword = (email) => sendPasswordResetEmail(auth, email);

  // Provide the current user and auth functions to the context
  const value = {
    currentUser,
    isAuthenticated: !!currentUser,
    loading,
    signUpWithEmail,
    signInWithEmail,
    googleSignIn,
    logout,
    forgotPassword
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};

export default AuthProvider;
