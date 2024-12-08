import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Furniro</h1>
        <nav className="flex space-x-6">
          <Link href="/"><a>Home</a></Link>
          <Link href="/shop"><a>Shop</a></Link>
          <Link href="/blog"><a>Blog</a></Link>
          <Link href="/contact"><a>Contact</a></Link>
        </nav>
        <div className="flex space-x-4">
          <button className="p-2"><i className="fas fa-user"></i></button>
          <button className="p-2"><i className="fas fa-search"></i></button>
          <button className="p-2"><i className="fas fa-heart"></i></button>
          <button className="p-2"><i className="fas fa-shopping-cart"></i></button>
        </div>
      </div>
    </header>
  );
}
