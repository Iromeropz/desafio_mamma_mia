import React, { createContext, useContext, useState, useMemo } from 'react';

export const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children, data }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeItemFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  const value = useMemo(() => {
    return {
      data,
      cartItems,
      addItemToCart,
      removeItemFromCart,
    };
  }, [data, cartItems]);

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
