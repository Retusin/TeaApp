import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

import {products} from './../../assets/data';

function AllProducts() {
  const [category, setCategory] = React.useState(0);
  const [allProducts, setAllProducts] = React.useState(products);

  React.useEffect(() => {
    if (category >= 0) {
      setAllProducts(products);
    }
    if (category === 1) {
      const filteredProducts = products.filter(item => item.category === 1);
      setAllProducts(filteredProducts);
    }
    if (category === 2) {
      const filteredProducts = products.filter(item => item.category === 2);
      setAllProducts(filteredProducts);
    }
    if (category === 3) {
      const filteredProducts = products.filter(item => item.category === 3);
      setAllProducts(filteredProducts);
    }
    if (category === 4) {
      const filteredProducts = products.filter(item => item.category === 4);
      setAllProducts(filteredProducts);
    }
    if (category === 5) {
      const filteredProducts = products.filter(item => item.category === 5);
      setAllProducts(filteredProducts);
    }
  }, [category]);

  return (
    <div className="container mt-10">
      <h2 className="mb-8 text-center text-3xl font-bold text-green-900">All Products</h2>
      <div>
        <ul className="flex flex-wrap items-center justify-center gap-6">
          <li>
            <button
              onClick={() => setCategory(0)}
              className={` ${
                category === 0 ? 'bg-green-900 text-white' : ''
              } rounded-xl border border-green-900 py-2 px-3 font-semibold duration-300 ease-in-out hover:bg-green-900 hover:text-white `}
            >
              All Tea
            </button>
          </li>
          <li>
            <button
              onClick={() => setCategory(1)}
              className={` ${
                category === 1 ? 'bg-green-900 text-white' : ''
              } rounded-xl border border-green-900 py-2 px-3 font-semibold duration-300 ease-in-out hover:bg-green-900 hover:text-white `}
            >
              Black Tea
            </button>
          </li>
          <li>
            <button
              onClick={() => setCategory(2)}
              className={` ${
                category === 2 ? 'bg-green-900 text-white' : ''
              } rounded-xl border border-green-900 py-2 px-3 font-semibold duration-300 ease-in-out hover:bg-green-900 hover:text-white `}
            >
              White Tea
            </button>
          </li>
          <li>
            <button
              onClick={() => setCategory(3)}
              className={` ${
                category === 3 ? 'bg-green-900 text-white' : ''
              } rounded-xl border border-green-900 py-2 px-3 font-semibold duration-300 ease-in-out hover:bg-green-900 hover:text-white `}
            >
              Yellow Tea
            </button>
          </li>
          <li>
            <button
              onClick={() => setCategory(4)}
              className={` ${
                category === 4 ? 'bg-green-900 text-white' : ''
              } rounded-xl border border-green-900 py-2 px-3 font-semibold duration-300 ease-in-out hover:bg-green-900 hover:text-white `}
            >
              Green Tea
            </button>
          </li>
          <li>
            <button
              onClick={() => setCategory(5)}
              className={` ${
                category === 5 ? 'bg-green-900 text-white' : ''
              } rounded-xl border border-green-900 py-2 px-3 font-semibold duration-300 ease-in-out hover:bg-green-900 hover:text-white `}
            >
              Oolong
            </button>
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-1 gap-5 py-10 text-center md:grid-cols-2 lg:grid-cols-4">
        {allProducts.map(item => (
          <div className="mx-auto" key={item.id}>
            <ProductCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllProducts;
