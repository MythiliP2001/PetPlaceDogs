import React from 'react';
import { assets } from '../../assets/assets'; 
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact">
      <div className="section__container footer__container container">
        <div className="row">
          {/* Logo Section */}
          <div className="col-md-3">
            <div className="footer__logo">
              <a href="#">Pet Place</a>
            </div>
          </div>

          {/* Company Section */}
          <div className="col-md-3">
            <h4>Company</h4>
            <ul className="footer__links list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/signin">SignIn</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Address Section */}
          <div className="col-md-3">
            <h4>Address</h4>
            <ul className="footer__links list-unstyled">
              <li><a href="#">Pets World, Kerala, India</a></li>
              {/* <li><a href="#">View on Maps</a></li> */}
            </ul>
            <br />
            <h4>Inquiries</h4>
            <ul className="footer__links list-unstyled">
              <li><a href="#">+91 0985456212</a></li>
              <li><a href="#">info@petsworld.com</a></li>
            </ul>
          </div>

          {/* Newsletter & Social Section */}
          <div className="col-md-3">
            <h4>Newsletter</h4>
            <p>Stay updated with our latest news</p>
            <form action="/">
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your email"
                  aria-label="Your email"
                  aria-describedby="subscribe-button"
                />
                {/* <button className="btn btn-primary" id="subscribe-button" type="submit">
                  <i className="ri-arrow-right-line"></i>
                </button> */}
              </div>
            </form>
            <br />
            <h4>Follow Us</h4>
            {/* <ul className="footer__socials list-unstyled">
            
            </ul> */}
          </div>
        </div>
      </div>
    
      <div className="footer__bar ">
        Copyright © 2024 Pets World. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
