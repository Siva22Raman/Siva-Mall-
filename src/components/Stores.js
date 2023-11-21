import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Stores.css';

const storesData = [
  {
    id: 1,
    name: 'DOMINOS',
    description: 'A great place to shop for all your needs.',
    imageUrl: 'https://play-lh.googleusercontent.com/_lq2HX0YJNDrr0EeUebLAB2JsGbRGyoFY-XOnuUFTPfeEqaHNIyMOGqLx-oq4mUWPpn0',
  },
  {
    id: 2,
    name: 'KFC',
    description: 'Quality products at affordable prices.',
    imageUrl: 'https://b.zmtcdn.com/data/pictures/chains/1/931/9410759d611db9c62c3acc23c1f27e06.jpg',
  },
  {
    id: 3,
    name: 'Cafe Coffee Day',
    description: 'Quality products at affordable prices.',
    imageUrl: 'https://i.ndtvimg.com/i/2016-08/coffee-day-enterprises-650-400_650x400_61470924990.jpg',
  },
  {
    id: 4,
    name: 'Thai Express',
    description: 'Quality products at affordable prices.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YorkUThaiExpress.JPG/1200px-YorkUThaiExpress.JPG',
  },
  // Add more store objects as needed
];

const Stores = () => {
  return (
    <div className="stores-container">
      {storesData.map((store) => (
        <div key={store.id} className="store-card">
          <img src={store.imageUrl} alt={store.name} className="store-image" />
          <h2 className="store-name">{store.name}</h2>
          <p className="store-description">{store.description}</p>
          <Link to={`/store/${store.id}`} className="shop-button">
            Shop
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Stores;
