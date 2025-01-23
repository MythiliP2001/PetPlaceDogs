import React from 'react';
import './Contact.css';
import { assets } from '../../../assets/assets';

const Contact = () => {
  return (
    <div className="contact-page">
       <div className="breadcrumb">
        <a href="/">Home</a>  &gt;
        <a href='/about'>About</a> &gt;<span>Contact Us</span>
      </div>
      <div className="contact-info">
        <h2>We Are Always Available For You & Your Pets</h2>
        <p>pets are all </p>
        <div className="info">
          <div className="info-item">
            <i className="fas fa-phone"></i>
            <span>+123 8989 444</span>
          </div>
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <span>256 Avenue, New York City</span>
          </div>
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <span>info@gmail.com</span>
          </div>
        </div>
        <div className="social-media">
          <i className="fab fa-facebook-f">
            <img src={assets.facebook_1} />
          </i>
          <i className="fab fa-instagram">
            <img src={assets.insta} />
          </i>
          <i className="fab fa-youtube">
            <img src={assets.youtube} />
          </i>
        </div>
      </div>
      <div className="contact-form">
        <h3>Post a Comment</h3>
        <p>Your email address will not be published. Required fields are marked *</p>
        <form>
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="E-mail" required />
          <input type="text" name="website" placeholder="Website" />
          <textarea name="message" placeholder="Message" required></textarea>
          <button type="submit">Send Us Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
