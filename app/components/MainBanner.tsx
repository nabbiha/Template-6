import React from 'react';

export default function MainBanner() {
  return (
    <div className="bg-cover bg-center h-96" style={{ backgroundImage: "url('/path-to-banner-image.jpg')" }}>
      <div className="container mx-auto h-full flex flex-col justify-center items-center text-center text-white">
        <h2 className="text-4xl font-bold">New Arrival</h2>
        <p className="mt-4 text-lg">Discover Our New Collection. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
        <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded">Buy Now</button>
      </div>
    </div>
  );
}
