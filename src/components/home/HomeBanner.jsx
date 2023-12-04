import React from 'react';
import { useNavigate } from 'react-router-dom';
import bannerImage from '../../assets/images/homepage-banner.jpg'; // Ensure this path is correct
import '../../assets/styles/home.scss';

const HomeBanner = () => {
  let navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/signup'); // Ensure you have a route set up for '/signup'
  };

  return (
    <div className="home-banner" style={{ backgroundImage: `url(${bannerImage})` }}>
      <div className="banner-content">
        <h1>Redefining Farm Management in Africa</h1>
        <p>Empower your farming journey with modern tools designed for Africa's agricultural champions.</p>
        <button className="get-started-button" onClick={handleButtonClick}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HomeBanner;
