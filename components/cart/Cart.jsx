'use client'

import { useCart } from '@/hooks/useCart'
import CartItem from './CartItem'

export default function Cart() {
  const { cart } = useCart()

  return (
    <div className="container gap-6 pt-4 pb-16">
      <div className="mx-auto space-y-4 max-w-6xl">
        {cart?.cartItems?.length > 0 ? (
          cart?.cartItems?.map((item) => (
            <CartItem key={item?.id} item={item} />
          ))
        ) : (
          <div className="text-2xl text-center">Product cart is empty...</div>
        )}
      </div>
    </div>
  )
}
