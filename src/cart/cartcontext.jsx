import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContainer = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (newItem) => {
    const productExist = cartItems.find((item) => item.name === newItem.name);

    if (productExist) {
      return;
    }

    setCartItems([...cartItems, newItem]);
  };

  const removeFromCart = (productName) => {
    const filteredCart = cartItems.filter((item) => item.name !== productName);
    setCartItems(filteredCart);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
