import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='bg-[#F8F8F8] flex items-center h-16 mx-auto px-8 text-black top-0'>
      <div>
        <NavLink to='/shopping-cart'>
          <h1 className='text-2xl font-bold hover:cursor-pointer hover:text-[#8F00FF] transition'>Store</h1>
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

    </div>
  );
};

export default Navbar;
