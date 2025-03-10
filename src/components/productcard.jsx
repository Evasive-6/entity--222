import React from 'react';
import ViewProductButton from '../component/button'; // Adjust the import path based on your folder structure

const ProductCard = ({ product }) => {
  const handleViewProduct = () => {
    alert(`Viewing details for: ${product.name}`);
  };

  return (
    <div className="w-64 bg-white rounded-lg shadow-md p-4 m-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-t-lg"
      />
      <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
      <p className="text-gray-700 text-lg my-2">${product.price}</p>
      <ViewProductButton onClick={handleViewProduct} />
    </div>
  );
};

export default ProductCard;
// write product card here
