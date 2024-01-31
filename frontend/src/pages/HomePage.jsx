import React from 'react';
import { Link } from 'react-router-dom';
import transparent from '../images/transparent.png'

const HomePage = () => {
  return (
    <div className='bg-[#F8F8F8] w-full flex flex-col justify-between h-[90vh]'>
      <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div className='flex flex-col justify-center md:items-start w-full px-10'>
          <h1 className='text-[60px] font-semibold'>Summer Collection</h1>
          <h1 className='text-[60px] font-bold text-[#8F00FF]'>2024</h1>
          <p className='text-[md] font-semibold mt-3'>From everyday essentials to unique and specialized products, we've got you covered.</p>
          <Link to='/shopping-cart/products' className='py-3 px-8 text-white font-bold bg-[#8F00FF] sm:w-[60%] my-4 rounded-md mt-10 hover:bg-white hover:text-[#8F00FF] border-2 border-[#8F00FF] transition' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >Shop Now
          </Link>
        </div>
        <div>
          <img className='w-[65%] ml-20' src={transparent} alt='' />
        </div>
      </div>
    </div>

    
  );
};

export default HomePage