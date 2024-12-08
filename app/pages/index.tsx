import React from 'react';
import Head from 'next/head';
import FilterSection from '../components/FilterSection';
import ProductGrid from '../components/ProductGrid';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Furniro - Shop</title>
        <meta name="description" content="Furniro - Shop page" />
      </Head>
      <FilterSection />
      <ProductGrid />
    </div>
  );
}
