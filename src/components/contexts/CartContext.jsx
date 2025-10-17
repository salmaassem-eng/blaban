import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [successMessage, setSuccessMessage] = useState("");

  const addToCart = (itemName) => {
    setCartCount(prev => prev + 1);
    setSuccessMessage(`✔️ تمت إضافة ${itemName} إلى السلة بنجاح!`);

    // Hide success message after 2 seconds
    setTimeout(() => setSuccessMessage(""), 2000);
  };

  return (
    <CartContext.Provider value={{ cartCount, addToCart, successMessage }}>
      {children}
    </CartContext.Provider>
  );
};
