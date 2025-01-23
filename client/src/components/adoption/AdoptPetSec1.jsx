import React, { useEffect } from 'react';
import './AdoptPetSec1.css';
import { assets } from '../../assets/assets';

const AdoptPetSec1 = () => {
  useEffect(() => {
    const banner = document.querySelector('.banner');
    banner.classList.add('animate');
  }, []);

  return (
    <div className="adopt-pets-container">
      <div className="banner-container">
        <img src={assets.client_2} alt="Adopt Pets" className="banner" />
      </div>
      <div className="text-container">
        <h1>We Love Our Job! 🐾</h1>
        <h2>Adopt Pets And Save Their Lives</h2>
        <p>
          We will work with you to develop individualized care plans including management of chronic diseases. 
          We are committed to providing healthcare-centered care that inspires.
        </p>
        <button className="contact-button">Contact With Us</button>
      </div>
      <div className="rating-container">
        <div className="rating">
          <span>⭐ 4.7</span> based on 1,567 reviews
        </div>
      </div>
    </div>
  );
};

export default AdoptPetSec1;
