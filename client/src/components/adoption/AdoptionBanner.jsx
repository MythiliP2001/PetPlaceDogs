import React from 'react';
import SearchBar from './SearchBar';
import CategoryCard from './CategoryCard';
import './AdoptionBanner.css';
import { assets } from '../../assets/assets';
import AdoptPetSec1 from './AdoptPetSec1';

const AdoptionBanner = () => {
  return (
    <>
    <div className="adoption-banner">
      <div className="left-content">
        <p className="subtitle">Find your new pet from our animal shelters.</p>
        <h1 className="title">
          Adopt Your <span className="highlight">Pretty</span> Friend
          <span className="icon-highlight">
            <img
              src={assets.instagram_3}
              alt="paw"
              className="small-icon"
            />
          </span>
        </h1>
        <SearchBar />
        <div className="categories">
          <CategoryCard icon="🐶" title="Dogs" count="2,590" />
          <CategoryCard icon="🐱" title="Cats" count="1,217" />
          <CategoryCard icon="🐾" title="Others Pet" count="1,120" />
        </div>
      </div>
      <div className="right-content">
        <img
          src={assets.instagram_4}
          alt="Adoption"
          className="banner-image"
        />
      </div>
     
      
    </div>
     <AdoptPetSec1/>

    </>
  );
};

export default AdoptionBanner;
