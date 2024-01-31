import ProductList from '../components/ProductList';
import Footer from '../components/Footer';
import { CartContext } from '../components/CartContext';
import React, { useContext } from 'react'

const Productpage = () => {
  return (
    <div className='bg-[#F8F8F8]'>
      <ProductList />
      <Footer />
    </div>
  );
};

export default Productpage