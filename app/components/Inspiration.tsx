import React from 'react';

export default function Inspiration() {
  return (
    <div className="container mx-auto mt-12">
      <h3 className="text-3xl font-bold text-center">50+ Beautiful rooms inspiration</h3>
      <p className="text-center mt-2">Discover our gallery of inspiring rooms to spark your creativity.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
      </div>
      <div className="text-center mt-8">
        <button className="bg-blue-500 text-white py-2 px-4 rounded">Explore More</button>
      </div>
    </div>
  );
}
