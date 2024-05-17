'use client'

import { useCart } from '@/hooks/useCart'
import Link from 'next/link'

export default function CartItemQty() {
  const { count } = useCart()
  return (
    <>
      <Link
        href="/checkout"
        className="text-center text-gray-700 hover:text-primary transition relative">
        <div className="text-2xl">
          <i className="fa-solid fa-bag-shopping"></i>
        </div>
        <div className="text-xs leading-3">Cart</div>
        <div className="absolute -right-3 -top-5 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
          {count}
        </div>
      </Link>
    </>
  )
}
