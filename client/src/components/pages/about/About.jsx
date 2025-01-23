import React, { useEffect } from 'react';
import './About.css';

import { assets } from '../../../assets/assets';
import { useNavigate } from 'react-router-dom';
import Footer from '../../footer/Footer';

const AboutUs = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const container = document.querySelector('.about-us-container');
    container.classList.add('animate');
    const elements = document.querySelectorAll('.text-section, .image-section'); 
    elements.forEach(el => el.classList.add('animate'));
  }, []);

  return (

    <div className="about-us-container">
      <div className="breadcrumb">
        <a href="/">Home</a> &gt; <span>About Us</span>
      </div>
      <h1>About Us</h1>
      <div className="about-us-content">
        <div className="text-section">
          <h2>We'll Make Your Pets Really Happy</h2>
          <ul className="points-list">
             <li>Over 10 years of experience</li>
              <li>20 talented vets ready to help you</li>
              <li>High-quality products only</li>
            </ul>
          <p>
            We will work with you to develop individualized care plans,
            including management of chronic diseases. We are committed to being
            the region's premier healthcare network providing patient-centered
            care that inspires.
          </p>
        </div>
        <div className="image-section">
          <img src={assets.about_1} alt="Pets" />
        </div>
        <button onClick={()=> navigate('/contact')}
        className='about-btn'>Read More</button>
      </div>
      <div className='footer-sec'>
        <Footer/>

      </div>
    </div>
    
   
  );
};

export default AboutUs;
