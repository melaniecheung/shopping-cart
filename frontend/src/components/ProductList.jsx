import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

import Product from '../components/Product';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
      fetch('http://localhost:4000/allproducts')
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }, [])

  const filterClothing = products.filter(item => {
    return item.category === "men's clothing" || item.category === "women's clothing"
  })
  
  const filterElectronics = products.filter(item => {
    return item.category === "electronics"
  })
  
  const filterjewelery = products.filter(item => {
    return item.category === "jewelery"
  })
  
  return (
    <div className='py-16'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-[3rem] max-w-sm mx-auto md:max-w-none'>
          {products.map(product => (
            <Product product={product} key={product.id} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;





// useEffect(() => {
//   axios.get('https://fakestoreapi.com/products')
//     .then(response => {
//       setProducts(response.data);
//     })
//     .catch(error => {
//       console.error('Error fetching products:', error);
//     });
// }, []);
