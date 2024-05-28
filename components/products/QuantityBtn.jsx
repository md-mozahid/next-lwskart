'use client'

import { useState } from 'react';

export default function QuantityBtn() {
   const [quantity, setQuantity] = useState(1);
   

   const handleQtyIncrement = () => {
     setQuantity((prev) => prev + 1);
   };

   const handleQtyDecrement = () => {
     if (quantity > 1) {
       setQuantity(quantity - 1);
     }
   };

  return (
    <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
      <button
        onClick={() => handleQtyDecrement()}
        className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
      >
        -
      </button>
      <div className="h-8 w-8 text-base flex items-center justify-center">
        {quantity}
      </div>
      <button
        onClick={() => handleQtyIncrement()}
        className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
      >
        +
      </button>
    </div>
  );
}
