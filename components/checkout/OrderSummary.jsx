"use client";

import { useCart } from "@/hooks/useCart";

export default function OrderSummary() {
  const { cart } = useCart();

  return (
    <>
      {cart?.cartItems?.map((item) => (
        <div key={item?.id} className="flex justify-between">
          <div>
            <h5 className="text-gray-800 font-medium">{item?.title}</h5>
            <p className="text-sm text-gray-600">Size: M</p>
          </div>
          <p className="text-gray-600">x{item?.quantity}</p>
          <p className="text-gray-800 font-medium">
            ${(item?.price * item?.quantity).toFixed(2)}
          </p>
        </div>
      ))}
    </>
  );
}
