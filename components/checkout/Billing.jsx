"use client";

import { useCart } from "@/hooks/useCart";

export default function Billing() {
  const { cart } = useCart();
  const subTotal = cart?.cartItems?.map((item) => item?.price * item?.quantity);

  // const sum = subTotal.reduce((acc, curr) => acc + curr, 0);

  console.log(subTotal);


  return (
    <>
      <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercas">
        <p>subtotal</p>
        <p>${subTotal}</p>
      </div>

      <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercas">
        <p>shipping</p>
        <p>Free</p>
      </div>

      <div className="flex justify-between text-gray-800 font-medium py-3 uppercas">
        <p className="font-semibold">Total</p>
        <p>$1280</p>
      </div>
    </>
  );
}
