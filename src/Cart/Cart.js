import React from 'react';
import { useCart } from '../Context/CartContext'; // adjust path
import './Cart.css'; 

export default function Cart() {
  const { cartItems, increment, decrement } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.caloriesPerServing * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className='cart-container-para-1' >Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item?.image} alt={item?.name} />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Price: ₹{item.caloriesPerServing}</p>
                <div className="qty-controls">
                  <button onClick={() => decrement(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increment(item.id)}>+</button>
                </div>
              </div>
            </div>
          ))}
          <h3>Total: ₹{total}</h3>
        </div>
      )}
    </div>
  );
}
