import React from 'react';
import { NavLink } from 'react-router-dom';
import Cart from './Cart';

const Navbar = () => {
  return (
    <div className='bg-[#F8F8F8] flex items-center h-16 mx-auto px-8 text-black'>
      <div>
        <NavLink to='/shopping-cart'>
          <h1 className='mr-4 text-2xl font-bold hover:cursor-pointer hover:text-[#8F00FF] transition'>Store</h1>
        </NavLink>
      </div>

    <div className='flex-grow flex justify-center'>
      <ul className='flex'>
        <li className='p-4 hover:cursor-pointer font-semibold hover:text-[#8F00FF] transition'>
          <NavLink to='/shopping-cart/products'>Products</NavLink>
        </li>
        <li className='p-4 hover:cursor-pointer font-semibold hover:text-[#8F00FF] transition'>
          <NavLink to='/shopping-cart/about'>About</NavLink>
        </li>
      </ul>
    </div>

    <div className='flex justify-end'>
      <ul className='flex'>
      {localStorage.getItem('auth-token')?
        <button className='mr-6 font-semibold hover:cursor-pointer hover:text-[#8F00FF] transition' onClick={() => {localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>:        
        <li className='mr-6 font-semibold hover:cursor-pointer hover:text-[#8F00FF] transition'>
          <NavLink to='/shopping-cart/signin'>Sign In</NavLink>
        </li>}
        <li>
          <Cart />
        </li>
      </ul>
    </div>
    </div>
  );
};

export default Navbar;