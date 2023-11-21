import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Cstore.css';

const storesData = [
  {
    id: 1,
    name: 'Zudio',
    description: 'A great place to shop for all your needs.',
    imageUrl: 'https://booxoul.com/wp-content/uploads/2023/07/Zudio-The-Face-of-Changing-Fashion-for-Millennials-and-Gen-Z.webp',
  },
  {
    id: 2,
    name: 'WestSide',
    description: 'Quality products at affordable prices.',
    imageUrl: 'https://www.punekarnews.in/wp-content/uploads/2023/09/Westside-.jpg',
  },
  {
    id: 3,
    name: 'Allen Solly',
    description: 'Quality products at affordable prices.',
    imageUrl: 'https://content3.jdmagicbox.com/comp/chennai/v6/044pxx44.xx44.180703133143.l6v6/catalogue/allen-solly-anna-nagar-chennai-shirt-retailers-r0875c8yix.jpg?clr=',
  },
  {
    id: 4,
    name: "Levi's",
    description: 'Quality products at affordable prices.',
    imageUrl: 'https://im.whatshot.in/img/2021/Feb/levis-hr-07-1613618880.jpg',
  },
  // Add more store objects as needed
];

const Cstore = () => {
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

export default Cstore;
