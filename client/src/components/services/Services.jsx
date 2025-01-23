import React from 'react';
import { assets } from '../../assets/assets';
import './Services.css';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate =  useNavigate();
  return (
    <div>
      <section className="section__container service__container" id="service">
      <p className="section__subheader">Services</p>
      <h2 className="section__header">What we can do for you</h2>
      <div className="service__flex">
        <div className="service__card">
          <div>
            <img src={assets.service_1} 
            onClick={()=>{
              navigate('/training')
            }}
            alt="service" />
          </div>
          <p>Training Programs</p>
        </div>
        <div className="service__card">
          <div>
            <img src={assets.service_2}
             alt="service"
             onClick={()=>{
              navigate('/adoption')
             }}
             />
          </div>
          <p>Adoption</p>
        </div>
        <div className="service__card">
          <div>
            <img
             src={assets.service_3}
              alt="service"
              onClick={()=>{
                navigate('/grooming')
              }} />
          </div>
          <p>Grooming services</p>
        </div>
        <div className="service__card">
          <div>
            <img src={assets.service_4} 
            alt="service" 
            onClick={()=>{
              navigate('/veteniary')
            }}
            />
          </div>
          <p>Veteniary Services</p>
        </div>
        <div className="service__card">
          <div>
            <img src={assets.service_5}
            onClick={()=>{
              navigate('/boarding')
            }}
            alt="service" />
          </div>
          <p>Pet Boarding Services</p>
        </div>
      </div>
    </section>

    </div>
  )
}

export default Services
