import React, { useState } from 'react';

export default function ProductDetails({ product }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="container mx-auto my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src={product.image} alt={product.name} className="w-full" />
        </div>
        <div>
          <h2 className="text-3xl font-bold">{product.name}</h2>
          <p className="text-2xl font-bold text-gray-700">{product.price}</p>
          <div className="mt-4">
            <span className="text-gray-600">{product.reviews}</span>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Size</label>
            <select className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm">
              {product.sizes.map(size => (
                <option key={size}>{size}</option>
              ))}
            </select>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Color</label>
            <select className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm">
              {product.colors.map(color => (
                <option key={color}>{color}</option>
              ))}
            </select>
          </div>
          <div className="mt-4 flex items-center">
            <button onClick={() => setQuantity(quantity - 1)}>-</button>
            <input type="text" value={quantity} readOnly className="mx-2 text-center w-12 border rounded-md" />
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>
          <div className="mt-4 flex space-x-4">
            <button className="bg-blue-500 text-white py-2 px-4 rounded">Add To Cart</button>
            <button className="bg-gray-500 text-white py-2 px-4 rounded">Compare</button>
          </div>
          <div className="mt-4">
            <p>SKU: {product.sku}</p>
            <p>Category: {product.category}</p>
            <p>Tags: {product.tags.join(', ')}</p>
          </div>
          <div className="mt-4 flex space-x-4">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <h3 className="text-2xl font-bold">Description</h3>
        <p className="mt-2">{product.description}</p>
      </div>
    </div>
  );
}
