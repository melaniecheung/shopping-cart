import React, { useContext } from "react";
import { CartContext } from "../components/CartContext";

const CartTotal = () => {
    const { getTotalCartAmount } = useContext(CartContext);
    const totalCartAmount = getTotalCartAmount();
    const deliveryAndHandlingCost = totalCartAmount > 0 ? 10 : 0; // Conditionally set the delivery and handling cost

    return (
        <>
            <div className="px-10 text-2xl">Summary</div>
            <div className="flex">
                <div className="py-2 px-6 w-[500px] font-light min-h-[150px] flex">
                    <div className='w-full flex flex-col pl-5 pt-5'>
                        <div className='flex justify-between mb-2'>
                            <p>Subtotal</p>
                            <p>${totalCartAmount}</p>
                        </div>
                        <div className='flex justify-between mb-2 pt-2'>
                            <p>Estimated Delivery & Handling</p>
                            <p>${deliveryAndHandlingCost}</p> {/* Display the conditional delivery and handling cost */}
                        </div>
                        <div className='flex justify-between mb-2 pt-2'>
                            <p>Taxes</p>
                            <p>---</p>
                        </div>
                        <div className="py-2 px-6 border-b border-gray-200"></div>
                        <div className='flex justify-between mb-2 pt-5'>
                            <p>Total</p>
                            <p className="font-semibold">${totalCartAmount + deliveryAndHandlingCost}</p> {/* Add the conditional delivery and handling cost to the total */}
                        </div>
                        <div className="py-2 px-6 border-b border-gray-200"></div>
                        <button className='mt-10 w-full text-white bg-black hover:bg-gray-800 transition font-medium rounded-xl text-sm px-5 py-4 mr-2 mb-2 focus:outline-none'>Checkout</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartTotal;
