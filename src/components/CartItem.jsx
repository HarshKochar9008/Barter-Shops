// src/components/CartItem.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/slices/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item));
  };

  return (
    <div>
      <img src={item.image} alt={item.name} />
      <div>
        <h3>{item.name}</h3>
        <p>${item.price.toFixed(2)}</p>
      </div>
      <div>
        <span>Qty: {item.quantity}</span>
        <button onClick={handleRemoveFromCart}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
