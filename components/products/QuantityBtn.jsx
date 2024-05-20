'use client'

import { useCart } from '@/hooks/useCart'

export default function QuantityBtn() {
  const { count, handleQtyIncrement, handleQtyDecrement } = useCart()

  return (
    <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
      <button
        onClick={() => handleQtyDecrement()}
        className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
        -
      </button>
      <div className="h-8 w-8 text-base flex items-center justify-center">
        {count}
      </div>
      <button
        onClick={() => handleQtyIncrement()}
        className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
        +
      </button>
    </div>
  )
}
