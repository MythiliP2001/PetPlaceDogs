import React from 'react';
import './PetDetails.css';
import { assets } from '../../../assets/assets';

const PetDetails = () => {
  return (
    <div className="pet-details-container">
      <div className="pet-image-section">
        {/* Image with navigation buttons */}
        {/* <button className="nav-button left">&lt;</button> */}
        <img src={assets.gal6} alt="Pet" className="pet-image" />
        {/* <button className="nav-button right">&gt;</button> */}
      </div>

      {/* Pet Information Section */}
      <div className="pet-info-section">
        <h2 className="pet-title">The Baby Brown Puppy</h2>
        <p className="pet-description">
         Chihuahua is a toy breed and its very small and cute
        </p>
        <h3 className="pet-price">$257.00</h3>

        <ul className="pet-details-list">
          <li>
            <span>Available Date:</span> <span>09, Dec 2024</span>
          </li>
          <li>
            <span>Breed:</span> <span>Chihuahua</span>
          </li>
          <li>
            <span>Color:</span> <span>Brown/white</span>
          </li>
          <li>
            <span>Gender:</span> <span>Male</span>
          </li>
          <li>
            <span>Weight:</span> <span>9–12lbs</span>
          </li>
          <li>
            <span>Puppy ID:</span> <span>6191–EP</span>
          </li>
          <li>
            <span>Date of Birth:</span> <span>12, Nov 2024</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PetDetails;
