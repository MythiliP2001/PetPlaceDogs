import React from 'react';
import './DogCard.css';

const DogCard = ({ name, image, price, discount }) => {
    const dogs = [
        {
          id: 1,
          name: 'Border Collie',
          image: '../../assets/instagram_4.jpg', // Replace with real image URLs
          price: 500,
          discount: 50,
        },
        {
          id: 2,
          name: 'Golden Retriever',
          image: '../../assets/instagram_3.jpg',
          price: 700,
        },
        {
          id: 3,
          name: 'German Shepherd',
          image: '../../assets/instagram_2.jpg',
          price: 800,
          discount: 20,
        },
      ];


  return (
    
    <div className="dog-card">
        <div className="dog-cards-container">
        {dogs.map((dog) => (
          <DogCard
            key={dog.id}
            name={dog.name}
            image={dog.image}
            price={dog.price}
            discount={dog.discount}
          />
        ))}
      </div>
      <img src={image} alt={name} className="dog-image" />
      <div className="dog-details">
        <h3>{name}</h3>
        <p className="price">Price: ${price}</p>
        {discount && <span className="discount">{discount}% OFF</span>}
        <button className="shop-now">Shop Now</button>
      </div>
    </div>
  );
};

export default DogCard;
