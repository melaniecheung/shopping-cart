import React, { useContext } from 'react'
import { useState, useEffect } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai'
import { RiShoppingCartLine } from 'react-icons/ri';
import Navbar from './Navbar';
import { CartContext } from './CartContext';
import CartCard from './CartCard';
import { IoArrowForward } from 'react-icons/io5';

export default function Cart() {
  const [isOpen, setIsOpen] = useState(false);

  const { cart, total } = useContext(CartContext);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  const { amount } = useContext(CartContext);

  return (
    <>
    {!isOpen ? (
      <div className='transition duration-300'>
        <div className='absolute right-8 top-5'>
          <button onClick={toggleCart}>
            <RiShoppingCartLine className='hover:text-[#8F00FF] text-2xl' />
          </button>
          
          <div className='bg-red-500 absolute left-4 top-3 text-[11px] w-[15px] h-[15px] text-white rounded-full flex justify-center items-center'>
            {amount}
          </div>
        </div>
      </div>
    ) :

    (
      <div className='w-full bg-white fixed top-0 right-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]'>
        {/* cart title */}
        <div className='border-b mt-8 py-5'>
          <p className='px-5 absolute top-6 left-5'>Shop</p>
          <span onClick={toggleCart} className='text-xl px-5 cursor-pointer absolute top-6 right-5 text-gray-500 transition hover:text-black'><IoArrowForward /></span>
        </div>

        {/* cart items */}
        <div className='flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden'>
          {cart.map (item => {
            return <CartCard item={item} key={item.id} />;
          })}
        </div>

        {/* cart bottom */}
        <div>
          <div className='flex w-full justify-between items-center font-semibold py-6'>
            <div>Total</div>
            <div>${parseFloat(total).toFixed(2)}</div>
          </div>
          <button className='w-full text-white bg-black hover:bg-gray-800 transition font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none'>Checkout</button>
        </div>
      </div>
    )}
    </>
  )
}