'use client'

import { useCart } from '@/hooks/useCart'
import { useRouter } from 'next/navigation'
import { FaBagShopping } from 'react-icons/fa6'

export default function AddToCart({ session, product, className }) {
  const router = useRouter()
  const { addItemToCart } = useCart()

  const handleClick = () => {
    if (session?.user) {
      addItemToCart({
        id: product?.id,
        title: product?.title,
        price: product?.price,
        thumbnail: product?.thumbnail,
        stock: product?.stock,
        quantity: product?.quantity,
      })
    } else {
      router.push('/login')
    }
  }
  return (
    <button onClick={handleClick} className={`btn-primary ${className}`}>
      <i className="">
        <FaBagShopping />
      </i>
      Add to cart
    </button>
  )
}
