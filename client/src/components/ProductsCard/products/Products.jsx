import React from 'react';
import './Products.css';
import { assets } from '../../../assets/assets';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const Products = () => {
  const navigate = useNavigate();
  const { ref: imgRef1, inView: imgInView1 } = useInView({ triggerOnce: true });
  const { ref: imgRef2, inView: imgInView2 } = useInView({ triggerOnce: true });
  const { ref: imgRef3, inView: imgInView3 } = useInView({ triggerOnce: true });
  const { ref: imgRef4, inView: imgInView4 } = useInView({ triggerOnce: true });

  return (
    <section className="product" id="store">
      <div className="section__container product__container">
        <p className="section__subheader">Products</p>
        <h2 className="section__header">Featured pet products</h2>
        <div className="product__grid">
          <div className={`product__card ${imgInView1 ? 'fade-in' : ''}`}>
            <img
              ref={imgRef1}
              src={assets.product_5}
              alt="product"
              onClick={() => navigate('/petcloth')}
            />
            <h4>Dog Clothes</h4>
            <p>Convenient and eco-friendly clothes</p>
          </div>
          <div className={`product__card ${imgInView2 ? 'fade-in' : ''}`}>
            <img
              ref={imgRef2}
              src={assets.product_2}
              alt="product"
              onClick={() => navigate('/pettoys')}
            />
            <h4>Pet Accessories</h4>
            <p>Explore our range of pet Accessories</p>
          </div>
          <div className={`product__card ${imgInView3 ? 'fade-in' : ''}`}>
            <img
              ref={imgRef3}
              src={assets.product_3}
              alt="product"
              onClick={() => navigate('/petfood')}
            />
            <h4>Dog Food</h4>
            <p>
              Nutritious and delicious dog food to keep your pet healthy and happy.
            </p>
          </div>
          <div className={`product__card ${imgInView4 ? 'fade-in' : ''}`}>
            <img
              ref={imgRef4}
              src={assets.product_6}
              alt="product"
              onClick={() => navigate('/petbed')}
            />
            <h4>Pet Beds</h4>
            <p>Explore our range of pet beds</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
