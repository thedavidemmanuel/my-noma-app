import React from 'react';
import { useNavigate } from 'react-router-dom'; // If you're using react-router-dom v6

const GetStartedButton = () => {
  let navigate = useNavigate();

  const navigateToSignUp = () => {
    navigate('/signup');
  };

  return (
    <button className="get-started-button" onClick={navigateToSignUp}>
      Get Started
    </button>
  );
};

export default GetStartedButton;
