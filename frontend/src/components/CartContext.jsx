import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [amount, setAmount] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const total = cart.reduce((accumulator, currentItem) => {
            return accumulator + currentItem.price * currentItem.amount
        }, 0);
        setTotal(total);
    });

    useEffect(() => {
        if (cart) {
            const cartAmount = cart.reduce((accumulator, currentItem) => {
                return accumulator + currentItem.amount;
            }, 0);
            setAmount(cartAmount);
        }
    }, [cart]);

    const addToCart = (product, id) => {
        const newItem = { ... product, amount: 1 };
        const cartItem = cart.find(item => {
            return item.id === id;
        });
        if (cartItem) {
            const newCart = [...cart].map(item => {
                if (item.id === id) {
                    return {...item, amount: cartItem.amount + 1};
                } else {
                    return item;
                }
            });
            setCart(newCart);
        } else {
            setCart([...cart, newItem]);
        }
    };

    const removeFromCart = (id) => {
        const newCart = cart.filter(item => {
            return item.id !== id;
        });
        setCart(newCart);
    };

    const increaseAmount = (id) => {
        const cartItem = cart.find(item => item.id === id);
        addToCart(cartItem, id);
    }
    
    const decreaseAmount = (id) => {
        const cartItem = cart.find((item) => {
            return item.id === id;
        });
        if (cartItem) {
            const newCart = cart.map(item => {
                if (item.id === id) {
                    return {...item, amount: cartItem.amount - 1 };
                } else {
                    return item;
                }
            });
            setCart(newCart);
        } if (cartItem.amount < 2) {
            removeFromCart(id);
        }
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseAmount, decreaseAmount, amount, total }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;