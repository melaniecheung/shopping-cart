import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = (props) => {
    const [cart, setCart] = useState([]);
    const getDefaultCart = () => {
        return Object.fromEntries(Array.from({ length: 300 }, (_, i) => [i, 0]));
    };
    const [cartItems, setCartItems] = useState(getDefaultCart());

    useEffect(() => {
        fetch('http://localhost:4000/allproducts') 
              .then((res) => res.json()) 
              .then((data) => setCart(data))
    
        if(localStorage.getItem("auth-token"))
        {
          fetch('http://localhost:4000/getcart', {
          method: 'POST',
          headers: {
            Accept:'application/form-data',
            'auth-token':`${localStorage.getItem("auth-token")}`,
            'Content-Type':'application/json',
          },
          body: JSON.stringify(),
        })
          .then((resp) => resp.json())
          .then((data) => {setCartItems(data)});
        }

    }, [])
  
    // const getTotalCartAmount = () => {
    //   let totalAmount = 0;
    //   for (const item in cartItems) {
    //     if (cartItems[item] > 0) {
    //       let itemInfo = cart.find((product) => product.id === Number(item));
    //       totalAmount += cartItems[item] * itemInfo.new_price;
    //     }
    //   }
    //   return totalAmount;
    // };

    const getTotalCartAmount = () => {
      let totalAmount = 0;
      for (const item in cartItems) {
        if (cartItems[item] > 0) {
          let itemInfo = cart.find((product) => product.id === Number(item));
          if (itemInfo) { // Check if itemInfo is defined
            totalAmount += cartItems[item] * itemInfo.new_price;
          }
        }
      }
      return totalAmount;
    };
    

    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
          if (cartItems[item] > 0) {
            totalItem += cartItems[item];;
          }
        }
        return totalItem;
      };

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        if(localStorage.getItem("auth-token"))
        {
            fetch('http://localhost:4000/addtocart', {
            method: 'POST',
            headers: {
            Accept:'application/form-data',
            'auth-token':`${localStorage.getItem("auth-token")}`,
            'Content-Type':'application/json',
            },
            body: JSON.stringify({"itemId":itemId}),
        })
            .then((resp) => resp.json())
            .then((data) => {console.log(data)});
        }
    };
    
      const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        if(localStorage.getItem("auth-token"))
        {
          fetch('http://localhost:4000/removefromcart', {
          method: 'POST',
          headers: {
            Accept:'application/form-data',
            'auth-token':`${localStorage.getItem("auth-token")}`,
            'Content-Type':'application/json',
          },
          body: JSON.stringify({"itemId":itemId}),
        })
          .then((resp) => resp.json())
          .then((data) => {console.log(data)});
        }
      };

      const removeAllFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] = 0 }));
        if(localStorage.getItem("auth-token"))
        {
          fetch('http://localhost:4000/removeallfromcart', {
          method: 'POST',
          headers: {
            Accept:'application/form-data',
            'auth-token':`${localStorage.getItem("auth-token")}`,
            'Content-Type':'application/json',
          },
          body: JSON.stringify({"itemId":itemId}),
        })
          .then((resp) => resp.json())
          .then((data) => {console.log(data)});
        }
      };
    
      const contextValue = {cart, getTotalCartItems, cartItems, addToCart, removeFromCart, getTotalCartAmount, removeAllFromCart };
      return (
        <CartContext.Provider value={contextValue}>
          {props.children}
        </CartContext.Provider>
      );
    };

export default CartProvider;