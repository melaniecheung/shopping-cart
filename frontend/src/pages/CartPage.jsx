import React from 'react';
import CartItems from '../components/CartItems';
import CartTotal from '../components/CartTotal';

const CartPage = () => {
  return (
    // Flex container with horizontal centering, responsive flex direction, and full width
    <div className='flex flex-col md:flex-row justify-center w-full mt-10'>
      {/* CartItems with responsive width */}
      <div className="w-full md:w-auto px-4 md:px-0">
        <CartItems />
      </div>
      <div className="w-full md:w-auto px-4 md:px-0 mt-4 md:mt-0">
        <CartTotal />
      </div>
      {/* CartTotal with responsive width */}
    </div>
  );
}

export default CartPage;