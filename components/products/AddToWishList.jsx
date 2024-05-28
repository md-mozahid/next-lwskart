'use client'

import { useRouter } from 'next/navigation'
import { FaHeart } from 'react-icons/fa6'
import { toast } from 'react-toastify'

export default function AddToWishList({ session, product, card }) {
  const router = useRouter()

  const handleClick = async () => {
    if (session?.user) {
      try {
        await fetch('/api/wishlist', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: session?.user?.email,
            productId: product?.id,
            // title: product?.title,
            // price: product?.price,
            // stock: product?.stock,
            // soldCounts: product?.soldCounts,
            // thumbnail: product?.thumbnail,
          }),
        })
        toast.success('Product added to wishlist.')
      } catch (error) {
        console.error(error)
      }
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
