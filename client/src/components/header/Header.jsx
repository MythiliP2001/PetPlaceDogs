import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { assets } from '../../assets/assets';
import './Header.css';
import { useNavigate } from 'react-router-dom';

function Header() {

  const navigate = useNavigate();

  const handleStartHereClick = () => {
    navigate('/store/dogs'); // Navigate to the store page
  };

  return (
    <header id="home">
      <Carousel>
        <Carousel.Item>
          <div className="header__container">
            <div className="header__content">
              <Carousel.Caption>
                <h1>Pet <br /> <span>World</span></h1>
                <h4>We love pets like you do :)</h4>
                <p>From routine check-ups to specialized treatments, we're here to ensure your pets lead happy, healthy lives.</p>
              </Carousel.Caption>
              {/* <div className="header__btn">
                <button>
                  Welcome!
                  <span><i className="ri-arrow-right-line"></i></span>
                </button>
              </div> */}
            </div>
            <div className="header__image">
              <img
                src={assets.header_bg}
                alt="header-bg"
                className="header_image-bg"
              />
              <span>
                <img src={assets.header} alt="header" />
              </span>
            </div>
          </div>
          <div className="header__bottom">
              <button className='header__bottom__btn' onClick={handleStartHereClick}>Start Here!</button>
          </div>
        </Carousel.Item>
      </Carousel>
    </header>
  );
}

export default Header;
