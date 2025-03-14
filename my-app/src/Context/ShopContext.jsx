import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product"; // Ensure correct file extension if needed

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const getDefaultCart = () => {
        let cart = {};
        for (let index = 0; index < all_product.length; index++) { // Fixed loop range
            cart[index] = 0;
        }
        return cart;
    };

    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: prev[itemId] + 1
        }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: prev[itemId] > 0 ? prev[itemId] - 1 : 0 // Prevent negative cart values
        }));
    };

    const contextValue = { all_product, cartItems, addToCart, removeFromCart };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
