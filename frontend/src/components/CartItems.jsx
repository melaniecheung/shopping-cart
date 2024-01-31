import React, { useContext } from "react";
import { CartContext } from "../components/CartContext";
import { IoMdClose, IoMdRemove, IoMdAdd } from 'react-icons/io'
import { PiTrash } from "react-icons/pi";

const CartItems = () => {
    const {cart} = useContext(CartContext);
    const {cartItems, removeFromCart, getTotalCartAmount, addToCart, removeAllFromCart } = useContext(CartContext);

    // Check if the cart is empty
    
    if (cart.length === 0) {
        return <div className="text-2xl pl-5">You have no items in your bag.</div>
    }
  return (
    <div>
      <h1 className="text-2xl pl-5">Bag</h1>

      {cart.map((e)=>{
        if(cartItems[e.id]>0)
        {
          return  <div className="flex">
                    <div className="py-2 px-6 border-b w-[700px] border-gray-200 font-light min-h-[150px] flex">

                      <div>
                        <img className="pt-5 pb-5" src={e.image} style={{ width: '200px', height: 'auto' }} alt="" /> 
                      </div>

                      <div className='w-full flex flex-col pl-5 pt-5'> 

                        <div className='font-semibold flex justify-between mb-2'>
                          <p>{e.name}</p>
                          <p>${e.new_price*cartItems[e.id]}</p>
                        </div>

                      {/* <div className='flex gap-x-2 h-[36px] text-sm mt-2'>
                        <p>${e.new_price}</p>
                      </div> */}

                      {/* <div>
                        <p>{e.category}</p>
                      </div> */}

                        <div className='flex gap-x-2 h-[36px] text-sm mt-2'>
                          <div className='flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium'>
                              <div onClick={() => removeFromCart(e.id)} className='flex-1 flex justify-center items-center cursor-pointer transition hover:text-black text-gray-500'>
                                  <IoMdRemove />
                              </div>
                              <div className='h-full flex justify-center items-center px-2'>{cartItems[e.id]}</div>
                              <div onClick={() => addToCart(e.id)} className='flex-1 h-full flex justify-center items-center cursor-pointer transition hover:text-black text-gray-500'>
                                  <IoMdAdd />
                              </div>
                          </div>
                          {/* item price */}
                          {/* <div className='flex-1 flex justify-end'>${parseFloat(new_price).toFixed(2)}</div> */}
                        </div>

                        <div className="mt-auto pb-5">
                          {/* <p>${e.new_price*cartItems[e.id]}</p> */}
                          <div onClick={() => removeAllFromCart(e.id)} className='text-xl hover:cursor-pointer'>
                            <PiTrash className='text-gray-500 transition hover:text-black'/>
                          </div>
                        </div>

                      </div>
                    </div>
                    <hr />
                  </div>;
        }
        return null
        })}
    </div>
  )
}

export default CartItems