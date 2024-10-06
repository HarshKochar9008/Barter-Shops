// src/pages/ProductDetailPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import cartSlice from '../redux/cartSlice';

const ProductDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.items.find((item) => item.id === parseInt(id)));

  if (!product) return <div>Product not found!</div>;

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="container mx-auto my-8">
      <div className="grid grid-cols-2 gap-8">
        <img src={product.image} alt={product.title} className="h-80 mx-auto" />
        <div>
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="my-4">{product.description}</p>
          <p className="text-xl font-semibold">${product.price}</p>
          <button
            onClick={handleAddToCart}
            className="bg-blue-500 text-white p-3 mt-4"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
