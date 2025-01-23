import React from 'react'
import { assets } from '../../../assets/assets'
import './Gallery.css';
import { useNavigate } from 'react-router-dom';

const Gallery = () => {
  const navigate = useNavigate();
  return (
    <div>
    <h2>Our Gallery</h2>
    <div className='breadcrumb'>
      
      <a href='/'>Home</a> &gt; <span>Gallery</span>
    <div className='gallery-section'>
      <img src={assets.gal1} />
      <img src={assets.gal2} />
      <img src={assets.gal3} />
      <img src={assets.gal4} />
      <img src={assets.gal5} />
      <img src={assets.gal6} />
    </div>
    </div>
    </div>
  )
}

export default Gallery;