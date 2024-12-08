import React from 'react';

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  discount?: string;
  tag?: string;
}

export default function ProductCard({ name, description, price, image, discount, tag }: ProductCardProps) {
  return (
    <div className="rounded overflow-hidden shadow-lg">
      <img src={image} alt={name} className="w-full" />
      <div className="p-4">
        <h4 className="text-xl font-bold">{name}</h4>
        <p className="mt-2 text-gray-700">{description}</p>
        <p className="mt-2 font-bold">
          {discount ? <span className="text-red-500 line-through mr-2">{discount}</span> : null}
          {price}
        </p>
        {tag && <span className="mt-2 bg-red-500 text-white py-1 px-2 rounded">{tag}</span>}
      </div>
    </div>
  );
}
