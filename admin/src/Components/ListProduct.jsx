// import React, { useState, useEffect } from 'react'
// import cross_icon from '/Users/melaniecheung/Desktop/shopping-cart/admin/src/assets/cross_icon.png'

// const ListProduct = () => {
//     const [allProducts, setAllProducts] = useState([]);

//     const fetchInfo = async () => {
//         await fetch('http://localhost:4000/allproducts')
//         .then((res) => res.json())
//         .then((data) => {setAllProducts(data)});
//     }

//     useEffect(() => {
//         fetchInfo();
//     }, [])

//     const remove_product = async(id) => {
//         await fetch('http://localhost:4000/removeproduct', {
//             method: 'POST',
//             headers: {
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json',
//             },
//             body:JSON.stringify({id:id})
//         })
//         await fetchInfo();
//     }

//   return (
//     <div className='list-product'>
//         <h1>All Products List</h1>
//         <div className="listproduct-format-main">
//             <p>Products</p>
//             <p>Title</p>
//             <p>Old Price</p>
//             <p>New Price</p>
//             <p>Category</p>
//             <p>Remove</p>
//         </div>
//         <div className="listproduct-allproducts">
//             <hr />
//             {allProducts.map((product, index) => {
//                 return <>
//                 <div key={index} className="listproduct-format-main listproduct-format">
//                     <img className="listproduct-product-icon" src={product.image} alt="" />
//                     <p>${product.old_price}</p>
//                     <p>${product.new_price}</p>
//                     <p>{product.category}</p>
//                     <img className="listproduct-remove-icon" onClick={() => {remove_product(product.id)}} src={cross_icon} alt="" />
//                 </div>
//                 <hr />
//                 </>
//             })}
//         </div>
//     </div>
//   )
// }

// export default ListProduct

import React, { useEffect, useState } from "react";
import cross_icon from '../Assets/cross_icon.png'

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
    <div className="listproduct">
      <h1>All Products List</h1>
      <div className="listproduct-format-main">
          <p>Products</p>
          <p>Title</p>
          <p>Old Price</p>
          <p>New Price</p>
          <p>Category</p>
          <p>Remove</p>
        </div>
      <div className="listproduct-allproducts">
        <hr />
        {allproducts.map((e) => {
          return (
            <>
              <div className="listproduct-format-main listproduct-format">
                <img className="listproduct-product-icon" src={e.image} alt="" />
                <p cartitems-product-title>{e.name}</p>
                <p>${e.old_price}</p>
                <p>${e.new_price}</p>
                <p>{e.category}</p>
                <img className="listproduct-remove-icon" onClick={()=>{removeProduct(e.id)}} src={cross_icon} alt="" />
              </div>
              <hr />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ListProduct;
