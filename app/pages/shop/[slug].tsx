// pages/shop/[slug].tsx
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

type Product = {
  name: string;
  price: string;
  description: string;
  image: string;
  reviews: string;
  sku: string;
  category: string;
  tags: string[];
  colors: string[];
  sizes: string[];
};

const products: { [key: string]: Product } = {
  'asgaard-sofa': {
    name: 'Asgaard Sofa',
    price: 'Rs. 250,000.00',
    description: 'Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.',
    image: '/path-to-asgaard-sofa-image.jpg',
    reviews: '5 Customer Reviews',
    sku: 'SS001',
    category: 'Sofas',
    tags: ['Sofa', 'Chair', 'Home', 'Shop'],
    colors: ['Purple', 'Gold', 'Black'],
    sizes: ['L', 'XL', 'XS']
  },
  // Add more products as needed
};

export default function ProductPage() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug || (Array.isArray(slug) && slug.length === 0)) {
    return <div>Product not found</div>;
  }

  const productSlug = Array.isArray(slug) ? slug[0] : slug;
  const product = products[productSlug];

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img src={product.image} alt={product.name} className="w-full" />
          </div>
          <div>
            <h2 className="text-3xl font-bold">{product.name}</h2>
            <p className="text-2xl font-bold text-gray-700">{product.price}</p>
            <div className="mt-4">
              <span className="text-gray-600">{product.reviews}</span>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Size</label>
              <select className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm">
                {product.sizes.map((size: string) => (
                  <option key={size}>{size}</option>
                ))}
              </select>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Color</label>
              <select className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm">
                {product.colors.map((color: string) => (
                  <option key={color}>{color}</option>
                ))}
              </select>
            </div>
            <div className="mt-4">
              <button className="bg-blue-500 text-white py-2 px-4 rounded">Add To Cart</button>
            </div>
            <div className="mt-4">
              <p>SKU: {product.sku}</p>
              <p>Category: {product.category}</p>
              <p>Tags: {product.tags.join(', ')}</p>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-bold">Description</h3>
          <p className="mt-2">{product.description}</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
