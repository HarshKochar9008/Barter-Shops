import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);

  if (status === 'loading') return <div>Loading...</div>;

  return (
    <div className="container mx-auto grid grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default HomePage;
