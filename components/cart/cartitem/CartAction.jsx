"use client";

import { useCart } from "@/hooks/useCart";
import { useState } from "react";

export default function CartAction() {
  const [quantity, setQuantity] = useState(1);
  const { totalCart, setTotalCart } = useCart();

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return <div>CartAction</div>;
}
