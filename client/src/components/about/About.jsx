import React from 'react';
import { assets } from '../../assets/assests';
import './About.css';  // Custom CSS for styling

const About = () => {
  return (
    <section className="section__container about__container" id="about">
      <p className="section__subheader">About Us</p>
      <h2 className="section__header">What we can do for you</h2>

      <div className="about-row">
        <div className="about-image">
          <img src={assets.about_1} alt="Pet health care" className="about-img" />
        </div>

        <div className="about-content">
          <div className="about-icon">
            <img src={assets.about_1_icon} alt="Health icon" className="about-icon-img" />
          </div>
          <h4>Let us help with your pet health</h4>
          <p>
            Our expert veterinarians are here to provide comprehensive care and guidance to ensure your pet stays in perfect health.
          </p>
        </div>
      </div>

      <div className="about-row">
        <div className="about-image">
          <img src={assets.about_2} alt="Caring personnel" className="about-img" />
        </div>
        <div className="about-content">
          <div className="about-icon">
            <img src={assets.about_2_icon} alt="Caring icon" className="about-icon-img" />
          </div>
          <h4>Caring personnel will take care of your pet</h4>
          <p>
            Your pet will be in good hands with our compassionate and well-trained staff, who treat every pet like family.
          </p>
        </div>
      </div>

      <div className="about-row">
        <div className="about-image">
          <img src={assets.about_3} alt="Pet grooming" className="about-img" />
        </div>
        <div className="about-content">
          <div className="about-icon">
            <img src={assets.about_3_icon} alt="Grooming icon" className="about-icon-img" />
          </div>
          <h4>Let us groom your precious and loved pet</h4>
          <p>
            From bathing to styling, we offer professional grooming services to keep your pet looking and feeling their best.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
