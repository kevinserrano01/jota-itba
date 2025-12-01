import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item._id === productToAdd._id);

      if (existingItem) {
        return prevItems.map((item) =>
          item._id === productToAdd._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevItems, { ...productToAdd, quantity: 1 }];
    });
  };

  const removeItemFromCart = (_id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item._id !== _id));
  };

  const updateItemQuantity = (_id, newQuantity) => {
    if (newQuantity < 1) return;

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === _id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.precio || 0) * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        removeItemFromCart,
        updateItemQuantity,
        clearCart,
        getTotalItems,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};