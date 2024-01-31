import { IoMdClose, IoMdRemove, IoMdAdd } from 'react-icons/io'
import { CartContext } from './CartContext';
import { useContext } from 'react';

const CartCard = ({ item }) => {
    const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);

    const {id, name, image, new_price, amount} = item;

    return <div className="flex">
        <div className="py-2 lg:px-6 border-b border-gray-200 w-full font-light min-h-[150px] flex items-center">

            <div>
                <img className='mr-4 max-w-[80px]' src={image} alt='' />
            </div>

            <div className='w-full flex flex-col'> 
                <div className='flex justify-between mb-2'>
                    <div>
                        {name}
                    </div>
                    {/* remove item */}
                    <div onClick={() => removeFromCart(id)} className='text-xl hover:cursor-pointer'>
                        <IoMdClose className='text-gray-500 transition hover:text-black'/>
                    </div>
                </div>

                {/* buttons */}
                <div className='flex gap-x-2 h-[36px] text-sm mt-2'>
                    <div className='flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium'>
                        <div onClick={() => decreaseAmount(id)} className='flex-1 flex justify-center items-center cursor-pointer transition hover:text-black text-gray-500'>
                            <IoMdRemove />
                        </div>
                        <div className='h-full flex justify-center items-center px-2'>{amount}</div>
                        <div onClick={() => increaseAmount(id)} className='flex-1 h-full flex justify-center items-center cursor-pointer transition hover:text-black text-gray-500'>
                            <IoMdAdd />
                        </div>
                    </div>
                    {/* item price */}
                    <div className='flex-1 flex justify-end'>${parseFloat(new_price).toFixed(2)}</div>
                </div>
            </div>
        </div>
    </div>
}

export default CartCard