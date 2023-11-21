import React, { useState, useEffect } from 'react';
import zudioProducts from './zudioProducts';
import './Zudio.css';
import CartPopup from '../../components/CartPopup';
const Zudio = () => {
  const [cart, setCart] = useState([]);
  const [showAcknowledgment, setShowAcknowledgment] = useState(false);
  const [showCartPopup, setShowCartPopup] = useState(false);

  const addToCart = (product) => {
    // Check if the product is already in the cart
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);
    if (existingProductIndex !== -1) {
      // If the product is already in the cart, update its quantity
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      // If the product is not in the cart, add it with quantity 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    // Show the acknowledgment message for a few seconds
    setShowAcknowledgment(true);
    setTimeout(() => {
      setShowAcknowledgment(false);
    }, 3000);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
  };

  const calculateTotalPrice = () => {
    const totalPriceInRupees = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    return `₹${totalPriceInRupees.toFixed(2)}`;
  };

  useEffect(() => {
    // Hide the acknowledgment message after a certain time
    if (showAcknowledgment) {
      setTimeout(() => {
        setShowAcknowledgment(false);
      }, 3000);
    }
  }, [showAcknowledgment]);
  const toggleCartPopup = () => {
    setShowCartPopup(!showCartPopup);
  };

  return (
    <div>
      <nav className="top-nav">
        <div className="cart-icon">
          <i className="fa fa-shopping-cart" onClick={toggleCartPopup}></i>
          <span className="cart-count">{cart.length}</span>
        </div>
      </nav>

      <div className="product-list">
        {zudioProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-image-wrapper">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            </div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>₹{product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)} className="add-to-cart-button">Add to Cart</button>
          </div>
        ))}
      </div>
      {showCartPopup && (
        <CartPopup
          cart={cart}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
          calculateTotalPrice={calculateTotalPrice}
        />
      )}

  

      {showAcknowledgment && (
        <div className="acknowledgment">
          <div className="acknowledgment-icon">
            <i className="fa fa-check-circle"></i>
          </div>
          <div className="acknowledgment-message">
            Product added successfully!
          </div>
          <div className="loading-animation">
            <div className="loading-icon"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Zudio;
