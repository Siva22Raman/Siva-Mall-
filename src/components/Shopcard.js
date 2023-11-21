// ShopCard.js
import React from 'react';
import '../Styles/ShopCard.css';

const ShopCard = ({ title, description, imageUrl }) => {
  return (
    <div className="shop-card">
      <img src={imageUrl} alt={title} className="shop-card-image" />
      <div className="shop-card-content">
        <h3 className="shop-card-title">{title}</h3>
        <p className="shop-card-description">{description}</p>
        <a href="/Cloth">
        <button className="shop-card-button">Lets Go!!!</button>
        </a>
      </div>
    </div>
  );
};

export default ShopCard;
