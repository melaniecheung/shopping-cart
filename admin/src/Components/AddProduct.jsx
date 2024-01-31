import React, { useState } from "react";
import upload_area from "../Assets/upload_area.svg";
import upload_image from "/Users/melaniecheung/Desktop/shopping-cart/admin/src/assets/uploadimage.jpg"

const AddProduct = () => {

  const[image,setImage] = useState(false);
  const [productDetails,setProductDetails] = useState({
      name:"",
      image:"",
      category:"women",
      new_price:"",
      old_price:""
  });

  const AddProduct = async () => {
    console.log(productDetails)
    let responseData;
    let product = productDetails;
    let formData = new FormData();
    formData.append('product', image);

    await fetch('http://localhost:4000/upload', {
      method: 'POST',
      headers: {
        Accept:'application/json',
      },
      body: formData,
    })
    .then((resp) => resp.json())
    .then((data) => {responseData=data});

    if (responseData.success)
    {
      product.image = responseData.image_url;
      console.log(product);
      await fetch('http://localhost:4000/addproduct', {
      method: 'POST',
      headers: {
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(product),
    })
      .then((resp) => resp.json())
      .then((data) => {data.success?alert("Product Added"):alert("Failed")});
    }

  }

  const changeHandler = (e) => {
    console.log(e);
    setProductDetails({...productDetails,[e.target.name]:e.target.value});
    }

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
    }

  return (
    <>
    <div className="p-4 sm:ml-64">

      <form>
        
        <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Product Name</label>
            <input value={productDetails.name} onChange={(e)=>{changeHandler(e)}} type="text" name="name" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Type here" required/>
        </div>

        <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">Price</label>
                <input type="text" name="old_price" value={productDetails.old_price} onChange={(e)=>{changeHandler(e)}} className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Type here" required/>
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">Offer Price</label>
                <input type="text" name="new_price" value={productDetails.new_price} onChange={(e)=>{changeHandler(e)}} className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Type here" required/>
            </div>
        </div>

        <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Product Category</label>
            <select 
              value={productDetails.category} 
              name="category" 
              onChange={changeHandler} 
              required
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[200px] p-2.5" // Added the same classes as the input elements
            >
              <option value="" disabled>Choose a category</option> {/* Placeholder option */}
              <option value="women">Women</option>
              <option value="men">Men</option>
              <option value="kids">Kids</option>
            </select> 
        </div>
      </form>

      <div>
        <label htmlFor="file-input">
        <div style={{ width: '300px', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', border: '1px solid #ccc', backgroundColor: "white"}}>
          <img 
              src={!image ? upload_image : URL.createObjectURL(image)} 
              alt="" 
              style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} 
          />
        </div>

        </label>
        <input onChange={(e)=>{imageHandler(e)}} type="file" name="image" id="file-input" hidden />
      </div>
      <button onClick={()=>{AddProduct()}} type="submit" className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
    
    </div>
    </>
  );
};

export default AddProduct;