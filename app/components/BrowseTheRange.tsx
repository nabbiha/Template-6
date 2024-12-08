import React from 'react';

export default function BrowseTheRange() {
  return (
    <div className="container mx-auto mt-12">
      <h3 className="text-3xl font-bold text-center">Browse The Range</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="rounded overflow-hidden shadow-lg">
          <img src="" alt="Dining" />
          <div className="p-4">
            <h4 className="text-xl font-bold">Dining</h4>
          </div>
        </div>
        <div className="rounded overflow-hidden shadow-lg">
          <img src="" alt="Living" />
          <div className="p-4">
            <h4 className="text-xl font-bold">Living</h4>
          </div>
        </div>
        <div className="rounded overflow-hidden shadow-lg">
          <img src="" alt="Bedroom" />
          <div className="p-4">
            <h4 className="text-xl font-bold">Bedroom</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
