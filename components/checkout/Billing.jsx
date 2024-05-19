"use client";

import { useCart } from "@/hooks/useCart";

export default function Billing() {
  const { cart } = useCart();
  const subTotal = cart?.cartItems?.reduce((acc, item) => acc + item?.price * item?.quantity, 0);
  const shippingFee = 80

  const totalAmount = subTotal + shippingFee

  return (
    <>
      <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercase">
        <p>subtotal</p>
        <p>${subTotal}</p>
      </div>

      <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercase">
        <p>shipping</p>
        <p>${shippingFee}</p>
      </div>

      <div className="flex justify-between text-gray-800 font-medium py-3 uppercase">
        <p className="font-semibold">Total</p>
        <p>${totalAmount}</p>
      </div>
    </>
  );
}
