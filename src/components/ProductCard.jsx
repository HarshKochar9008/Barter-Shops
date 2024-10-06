import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <div className="details">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <div className="price">${product.price}</div>
        <Link to={`/product/${product.id}`} className="bg-blue-500 text-white p-2 block text-center mt-2">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
