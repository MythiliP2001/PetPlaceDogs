import React from 'react';
import './Intro.css'; 
import { assets } from '../../assets/assets';


const Intro = () => {
  return (
    <section className="section__container intro__container">
      <p className="section__subheader">Intro</p>
      <h2 className="section__header">Get to know us more</h2>
      <div className="intro__grid">
        <div className="intro__card">
          <div className="intro__image">
            <img src={assets.intro_1} alt="intro" />
          </div>
          <h4>Pet Experts</h4>
          <p>
            Meet our team of skilled veterinarians, dedicated to your pet's
            well-being.
          </p>
          <a href="#">Read More</a>
        </div>
        <div className="intro__card">
          <div className="intro__image">
            <img src={assets.intro_2} alt="intro" />
          </div>
          <h4>Vet Services</h4>
          <p>
            Offering a wide range of veterinary services to keep your pets
            healthy and happy.
          </p>
          <a href="#">Read More</a>
        </div>
        <div className="intro__card">
          <div className="intro__image">
            <img src={assets.intro_3} alt="intro" />
          </div>
          <h4>Contact Us</h4>
          <p>
            Reach out to us for any inquiries or schedule an appointment for
            your pet's care.
          </p>
          <a href="#">Read More</a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
