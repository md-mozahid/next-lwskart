'use client'

import { useCart } from '@/hooks/useCart'
import Link from 'next/link'

export default function CartSection({ session }) {
  const { cart, wishlist } = useCart()
  return (
    <div className="flex items-center space-x-2">
      <Link
        href="/wishlist"
        className="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300 hover:text-primary transition">
        <div className="text-2xl">
          <i className="fa-regular fa-heart"></i>
        </div>
        <div className="text-[14px] leading-3">
          Wishlist ({(session?.user && wishlist?.wishlistItems?.length) || 0})
        </div>
      </Link>
      <Link
        href="/cart"
        className="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300 hover:text-primary transition">
        <div className="text-2xl">
          <i className="fa-solid fa-bag-shopping"></i>
        </div>
        <div className="text-[14px] leading-3">
          Cart ({(session?.user && cart?.cartItems?.length) || 0})
        </div>
      </Link>
      <Link
        href="/account"
        className="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300 hover:text-primary transition">
        <div className="text-2xl">
          <i className="fa-regular fa-user"></i>
        </div>
        <div className="text-[14px] leading-3">Account</div>
      </Link>
    </div>
  )
}
