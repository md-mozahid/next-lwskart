'use client'

import { useCart } from '@/hooks/useCart'
import { useRouter } from 'next/navigation'

export default function WishListItemQty({ session, product }) {
  const router = useRouter()
  const { addItemToWishlist } = useCart()
  const handleClick = () => {
    if (session?.user) {
      addItemToWishlist({
        id: product?.id,
        title: product?.title,
        price: product?.price,
        thumbnail: product?.thumbnail,
        stock: product?.stock,
      })
    } else {
      router.push('/login')
    }
  }
  return (
    <button
      onClick={handleClick}
      className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
      title="add to wishlist">
      <i className="fa-solid fa-heart"></i>
    </button>
  )
}
