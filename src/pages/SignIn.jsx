// src/pages/SignInPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import googleIcon from '../assets/icons/google.svg'; // Ensure this path is correct
import '../assets/styles/signin.scss';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signInWithEmail, googleSignIn } = useAuth();
  const navigate = useNavigate();

  const handleSignInWithEmail = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmail(email, password);
      navigate('/dashboard');
    } catch (error) {
      console.error('Sign in failed', error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      navigate('/dashboard');
    } catch (error) {
      console.error('Google sign-in failed', error);
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-form">
        <h1>Collect all your farming data in one place.</h1>
        <form onSubmit={handleSignInWithEmail}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="signin-button">Sign in with email</button>
        </form>
        <button onClick={handleGoogleSignIn} className="google-signin-button">
          <img src={googleIcon} alt="Google sign-in" className="google-icon" />
          Continue with Google
        </button>
        {/* Add other sign-in methods here */}
      </div>
    </div>
  );
};

export default SignInPage;