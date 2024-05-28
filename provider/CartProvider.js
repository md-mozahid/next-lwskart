"use client";

import { CartContext } from "@/context";
import { useState } from "react";

export default function CartProvider({ children }) {
  const [totalCart, setTotalCart] = useState(null);

  return (
    <CartContext.Provider
      value={{
        totalCart,
        setTotalCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
