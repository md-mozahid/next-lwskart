'use client'

import { useCart } from '@/hooks/useCart'
import { useRouter } from 'next/navigation'
import { FaBagShopping } from 'react-icons/fa6'
import { toast } from 'react-toastify'

export default function AddToCart({ session, product, className }) {
  const router = useRouter()
  const { addItemToCart, count, cart } = useCart()
  const found = cart?.cartItems?.find((item) => item?.id === product?.id)

  const handleClick = () => {
    if (session?.user) {
      if (found) {
        router.push('/cart')
      } else {
        addItemToCart({
          id: product?.id,
          title: product?.title,
          price: product?.price,
          images: product?.images[0],
          sku: product?.sku,
          quantity: count,
        })
      }
      toast.success('Product added to cart.')
    } else {
      router.push('/login')
    }
  }

  return (
    <>
      {found ? (
        <button onClick={handleClick} className={`btn-secondary ${className}`}>
          <i className="">
            <FaBagShopping />
          </i>
          Update cart
        </button>
      ) : (
        <button onClick={handleClick} className={`btn-primary ${className}`}>
          <i className="">
            <FaBagShopping />
          </i>
          Add to cart
        </button>
      )}
    </>
  )
}
