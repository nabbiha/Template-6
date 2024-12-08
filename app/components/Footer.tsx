import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12 mt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h4 className="text-xl font-bold">Furniro</h4>
          <p className="mt-4">Contact Information:</p>
          <p>Address: 123 Furniture St.</p>
          <p>Email: info@furniro.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div>
          <h4 className="text-xl font-bold">Quick Links</h4>
          <ul className="mt-4">
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/shop"><a>Shop</a></Link></li>
            <li><Link href="/blog"><a>Blog</a></Link></li>
            <li><Link href="/contact"><a>Contact</a></Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold">Help</h4>
          <ul className="mt-4">
            <li><a href="#">Payment Options</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Privacy Policies</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold">Newsletter</h4>
          <p className="mt-4">Subscribe to our newsletter for the latest updates.</p>
          <form className="mt-4">
            <input type="email" className="bg-gray-700 text-white p-2 rounded w-full" placeholder="Your email address" />
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded mt-4">Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  );
}
