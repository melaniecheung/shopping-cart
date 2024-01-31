import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

const Product = ({ product }) => {
    const { addToCart } = useContext(CartContext);
    
    const { id, image, category, name, new_price } = product;

    return (
        <div className='bg-white flex flex-col flex-1 justify-between border border-[#e4e4e4] rounded-md'>
            <div>
                <div className='border-b border-[#ee4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
                    <div className='w-full h-full flex justify-center items-center'>
                        <div className='w-[300px] mx-auto flex justify-center items-center'>
                            <img className='max-h-[300px]' src={image} alt=''/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col mb-auto justify-between align-top px-5'>
                <p className='font-semibold'>{name}</p>
            </div>

            <div className='align-bottom px-5'>
                <div className='text-sm font-semibold capitalize text-gray-500 mt-1'>{product.category}</div>
                <p className='py-2'>${new_price.toFixed(2)}</p>
                <button onClick={() => addToCart(product.id)} className='mb-5 mt-2 flex-grow font-semibold w-full text-white bg-black hover:bg-gray-800 transition rounded-xl text-sm px-5 py-3 mr-2 focus:outline-none'>Add to Cart</button>
            </div>
        </div>
    )
}

export default Product