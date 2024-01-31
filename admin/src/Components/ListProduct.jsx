import React, { useEffect, useState } from "react";
import { PiTrash } from "react-icons/pi";

const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([]);

  const fetchInfo = () => { 
    fetch('http://localhost:4000/allproducts') 
            .then((res) => res.json()) 
            .then((data) => setAllProducts(data))
    }

    useEffect(() => {
      fetchInfo();
    }, [])

    const removeProduct = async (id) => {
      await fetch('http://localhost:4000/removeproduct', {
      method: 'POST',
      headers: {
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body: JSON.stringify({id:id}),
    })

    fetch('http://localhost:4000/allproducts') 
    .then((res) => res.json()) 
    .then((data) => setAllProducts(data))

    }

    return (
      <div className="p-4 sm:ml-64">
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-[3rem] max-w-sm mx-auto md:max-w-none'>
            {allproducts.map((e) => {
              return (
                <div key={e.id} className='bg-white flex flex-col justify-between border border-[#e4e4e4] rounded-md'>
                  <div className='border-b border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
                    <div className='w-full h-full flex justify-center items-center'>
                      <img className='max-h-[300px]' src={e.image} alt=''/>
                    </div>
                  </div>
    
                  <div className='flex justify-between items-center px-5'>
                    <p className='font-semibold'>{e.name}</p>
                    <PiTrash className="text-gray-500 transition hover:text-black text-xl hover:cursor-pointer" onClick={()=>{removeProduct(e.id)}} alt="" />
                  </div>

                  <div className='px-5 text-sm font-semibold capitalize text-gray-500 mt-1'>{e.category}</div>
                  
                  <div className='px-5 py-2 mb-2'>
                    <p>${e.new_price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
    


};

export default ListProduct;