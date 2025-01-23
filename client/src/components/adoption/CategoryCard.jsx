import React from 'react';
import './CategoryCard.css';


const CategoryCard = ({ icon, title, count }) => {
  return (
    <div className="category-card">
      <div className="icon">{icon}</div>
      <div className="content">
        <h3 className="title">{title}</h3>
        <p className="count">({count})</p>
      </div>
    </div>
  );
};

export default CategoryCard;
