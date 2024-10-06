// src/pages/CartPage.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './CartPage.css'
// Correctly importing the cartSlice
import cartSlice from '../redux/cartSlice';

const CartPage = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity: parseInt(quantity) }));
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  if (cart.length === 0) return <div>Your cart is empty!</div>;

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.map((item) => (
        <div key={item.id} className="border p-4 mb-4 flex justify-between">
          <div className="flex items-center">
            <img src={item.image} alt={item.title} className="h-20 w-20 mr-4" />
            <div>
              <h3 className="text-lg">{item.title}</h3>
              <p>${item.price}</p>
            </div>
          </div>
          <div className="flex items-center">
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) => handleQuantityChange(item.id, e.target.value)}
              className="w-16 p-1 border"
            />
            <button
              onClick={() => handleRemove(item.id)}
              className="bg-red-500 text-white p-2 ml-4"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className="text-right text-xl font-semibold">
        Total: ${totalPrice.toFixed(2)}
      </div>
      <Link to="/checkout" className="bg-green-500 text-white p-3 mt-4 block text-center">
        Proceed to Checkout
      </Link>
    </div>
  );
};

export default CartPage;
