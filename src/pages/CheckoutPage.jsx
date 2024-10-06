// src/pages/CheckoutPage.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkoutStart, checkoutSuccess, checkoutFailed } from '../redux/checkoutSlice';

const CheckoutPage = () => {
  const [form, setForm] = useState({ name: '', address: '', cardNumber: '' });
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const checkoutStatus = useSelector((state) => state.checkout.status);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(checkoutStart());
    try {
      // Simulate a successful checkout process
      setTimeout(() => {
        dispatch(checkoutSuccess({ order: cart, details: form }));
        alert('Order placed successfully!');
      }, 1000);
    } catch (error) {
      dispatch(checkoutFailed());
      alert('Checkout failed. Please try again.');
    }
  };

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <form onSubmit={handleSubmit} className="border p-4">
        <div className="mb-4">
          <label className="block text-lg">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 border"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg">Address</label>
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
            className="w-full p-2 border"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg">Card Number</label>
          <input
            type="text"
            name="cardNumber"
            value={form.cardNumber}
            onChange={handleChange}
            className="w-full p-2 border"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-3 w-full">
          {checkoutStatus === 'loading' ? 'Placing Order...' : 'Place Order'}
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
