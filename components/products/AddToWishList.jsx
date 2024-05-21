'use client'

import { useCart } from '@/hooks/useCart'
import { useRouter } from 'next/navigation'
import { FaHeart } from 'react-icons/fa6'
import { toast } from 'react-toastify'

export default function AddToWishList({ session, product, card }) {
    const router = useRouter()
    const { addItemToWishlist } = useCart()

    const handleClick = () => {
      if (session?.user) {
        addItemToWishlist({
          id: product?.id,
          title: product?.title,
          price: product?.discountPrice,
          images: product?.images[0],
          stock: product?.sku,
        })
        toast.success("Product added to wishlist.");
      } else {
        router.push('/login')
      }
    }
  return (
    <>
      {card ? (
        <button
          onClick={handleClick}
          className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
          title="add to wishlist">
          <i>
            <FaHeart />
          </i>
        </button>
      ) : (
        <button
          onClick={handleClick}
          className="border border-gray-700 text-gray-700 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition">
          <i className="">
            <FaHeart />
          </i>
          Wishlist
        </button>
      )}
    </>
  )
}
