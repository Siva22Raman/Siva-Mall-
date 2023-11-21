import React from 'react';
import '../Styles/Cartpopup.css'
import axios from 'axios';
import { toast } from 'react-toastify';

const CartPopup = ({ cart, removeFromCart, updateQuantity, calculateTotalPrice, onClose }) => {

  const handleopenpay=(data)=>{
    const options={
      "key": 'rzp_test_FxR6EZHdettodp', // Enter the Key ID generated from the Dashboard
      "amount": Number(data.amount)*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "Tharun",
      "description": "Test Transaction",
      "order_id": data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "handler": function (response){
        console.log(response);
        axios.post(`http://localhost:3000/verify`,{response:response}).then((res)=>{
          toast.success("order completed");
        }).catch(err=>{
          console.log(err);
        })
          // alert(response.razorpay_payment_id);
          // alert(response.razorpay_order_id);
          // alert(response.razorpay_signature)
      },
    }
    
  var rzp = new window.Razorpay(options);
  rzp.open();
   }
  const handleBuyClick = (us) => {
    const _data={
      amount:cart.CartTotalA,
    }
    axios.post(`http://localhost:3000/buys`,_data).then((res)=>{
      if(res){
        console.log(res.data,'29');
        handleopenpay(res.data.data)
      }
    }).catch(err=>{
      console.log(err);
    })}

  return (
    <div className="cart-backdrop">
    <div className="cart-popup">
        <a href className="close-button" onClick={onClose}> &times;</a>
      <h2 className="cart-header">Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id} className="cart-item">
            <div className="cart-item-details">
              <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
              {item.name} - ₹{(item.price * item.quantity).toFixed(2)} x {item.quantity}
            </div>
            <div className="cart-item-actions">
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <p className="cart-total">Total Price: {calculateTotalPrice()}</p>
      <a href='/loginform'>
      <button className="checkout-button" onClick={handleBuyClick}>Checkout</button>
      </a>
    </div>
    </div>
  );
};

export default CartPopup;
