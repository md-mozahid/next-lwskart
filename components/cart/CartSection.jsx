'use client'

import { useRouter } from 'next/navigation'

export default function CartSection({ session, cart, wishlist }) {
  const router = useRouter()
  const handleClick = (query) => {
    if (session?.user) {
      router.push(`/${query}`)
    } else {
      router.push('/login')
    }
  }

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => handleClick('wishlist')}
        className="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300 hover:text-primary transition">
        <div className="text-2xl">
          <i className="fa-regular fa-heart"></i>
        </div>
        <div className="text-[14px] leading-3">
          Wishlist ({(session?.user && wishlist?.length) || 0})
        </div>
      </button>
      <button
        onClick={() => handleClick('cart')}
        className="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300 hover:text-primary transition">
        <div className="text-2xl">
          <i className="fa-solid fa-bag-shopping"></i>
        </div>
        <div className="text-[14px] leading-3">
          Cart ({(session?.user && cart?.length) || 0})
        </div>
      </button>
      <button
        onClick={() => handleClick('account')}
        className="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300 hover:text-primary transition">
        <div className="text-2xl">
          <i className="fa-regular fa-user"></i>
        </div>
        <div className="text-[14px] leading-3">Account</div>
      </button>
    </div>
  )
}
