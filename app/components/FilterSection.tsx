import React from 'react';

export default function FilterSection() {
  return (
    <div className="container mx-auto my-4">
      <div className="flex justify-between items-center">
        <div>
          <label htmlFor="filter" className="mr-2">Filter:</label>
          <select id="filter" className="border p-2 rounded">
            <option value="all">All</option>
            <option value="new">New</option>
            <option value="sale">Sale</option>
          </select>
        </div>
        <div>
          <label htmlFor="itemsPerPage" className="mr-2">Items per page:</label>
          <select id="itemsPerPage" className="border p-2 rounded">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
        </div>
        <div>
          <label htmlFor="sortBy" className="mr-2">Sort by:</label>
          <select id="sortBy" className="border p-2 rounded">
            <option value="price">Price</option>
            <option value="popularity">Popularity</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>
    </div>
  );
}
