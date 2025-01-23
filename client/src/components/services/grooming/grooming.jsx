import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Grooming.css";
import { assets } from "../../../assets/assets";
import Footer from "../../footer/Footer";

const Grooming = () => {
  return (
    <div className="container-groom py-5">
     &lt; <a href="/">Home</a> 
      <div className="groom-container text-center mb-5">
        <h1 className="display-4 font-weight-bold ">
          Get The Best Dog Grooming
        </h1>
        <p className="para1 lead">
          Dogs come in all shapes and sizes. Whether you own a cute little
          Maltese or a Wolf dog, dogs are always favorite and loyal companions
          to their owners. Being a responsible dog owner means taking proper
          care of your dogs. This involves taking them for timely vaccinations,
          taking note of their behavior changes, keeping them clean, and taking
          them for professional grooming service. Give your dog the best dog
          grooming service in Kochi with dog grooming experts.
        <img className="groom-img"
        src={assets.groom1} />
        </p>
      </div>

      <div className="text-center mb-5">
        <h2 className="font-weight-bold mb-3">Grooming Services</h2>
        <p className="para2 lead">
          A dog grooming service includes giving a day of special care and
          attention to your puppies. Our dog groomers are experienced in
          handling a variety of breeds of dogs and are experts in handling and
          calming your dogs.
        </p>

        {/* Services List */}
        <ul className="list-unstyled text-left d-inline-block">
          <li className="mb-2">
            <i className="text-primary mr-2 fas fa-cut"></i> Giving a nail trim
          </li>
          <li className="mb-2">
            <i className="text-primary mr-2 fas fa-shower"></i> Luxury shampooing
            with a salon-quality shampoo
          </li>
          <li className="mb-2">
            <i className="text-primary mr-2 fas fa-clipboard-check"></i> Cleaning
            the ears
          </li>
          <li className="mb-2">
            <i className="text-primary mr-2 fas fa-brush"></i> Light Brushing
            Session
          </li>
          <li className="mb-2">
            <i className="text-primary mr-2 fas fa-scissors"></i> A full body
            haircut And Styling
          </li>
        </ul>

        {/* Call Button */}
        <div className="mt-4">
          <button className="btn-groom-primary btn-lg shadow">
            Call Now <i className="ml-2 fas fa-phone"></i>
          </button>
        </div>
      </div>
    
    </div>
  );
};

export default Grooming;
