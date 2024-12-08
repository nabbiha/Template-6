import React from 'react';

export default function OurProducts() {
  const products = [
    { name: "Syltherine", description: "Stylish cafe chair", price: "Rp 2,500,000", image: "/path-to-product-image.jpg", tag: "New" },
    { name: "Leviosa", description: "Luxury big sofa", price: "Rp 5,000,000", image: "/path-to-product-image.jpg", tag: "Sale" },
  ];

  return (
    <div className="container mx-auto mt-12">
      <h3 className="text-3xl font-bold text-center">Our Products</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {products.map((product, index) => (
          <div key={index} className="rounded overflow-hidden shadow-lg">
            <img src={product.image} alt={product.name} />
            <div className="p-4">
              <h4 className="text-xl font-bold">{product.name}</h4>
              <p className="mt-2">{product.description}</p>
              <p className="mt-2 font-bold">{product.price}</p>
              {product.tag && <span className="mt-2 bg-red-500 text-white py-1 px-2 rounded">{product.tag}</span>}
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="bg-blue-500 text-white py-2 px-4 rounded">Show More</button>
      </div>
    </div>
  );
}
