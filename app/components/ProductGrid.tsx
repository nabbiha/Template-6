import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: "Rp 2,500,000",
    image: "",
    discount: "Rp 3,500,000",
    tag: "-30%"
  },
  {
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: "Rp 2,500,000",
    image: "",
    tag: "New"
  },
  {
    name: "Lolito",
    description: "Luxury big sofa",
    price: "Rp 7,000,000",
    image: "",
    discount: "Rp 14,000,000",
    tag: "-50%"
  },
  {
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500,000",
    image: ""
  },
];

export default function ProductGrid() {
  return (
    <div className="container mx-auto my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
}
