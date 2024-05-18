import { useCart } from '@/hooks/useCart'
import Image from 'next/image'
import { FaRegTrashCan } from 'react-icons/fa6'

export default function CartItem({ item }) {
  const { addItemToCart, removeItemFromCart } = useCart()

  const increaseProduct = (cartItem) => {
    const newProduct = cartItem?.quantity + 1
    const product = { ...cartItem, quantity: newProduct }
    if (newProduct > cartItem?.stock) return

    addItemToCart(product)
  }

  const decreaseProduct = (cartItem) => {
    const newProduct = cartItem?.quantity - 1
    const product = { ...cartItem, quantity: newProduct }
    if (newProduct <= 0) return

    addItemToCart(product)
  }

  return (
    <>
      <div className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
        <div className="w-28">
          <Image
            src={item?.thumbnail}
            alt={item?.title}
            className="w-full size-20"
            width={300}
            height={300}
          />
        </div>
        <div className="w-1/3">
          <h2 className="text-gray-800 text-lg font-medium uppercase">
            {item?.title}
          </h2>
          <p className="text-gray-500 text-sm">
            Availability: <span className="text-green-600">In Stock</span>
          </p>
        </div>
        <div className="text-primary text-lg font-semibold bg-slate-700 px-3 py-1 rounded-md">
          <button
            onClick={() => decreaseProduct(item)}
            className="text-2xl text-slate-100">
            -
          </button>
          <span className="mx-5 border border-slate-500 px-2 rounded">
            {item?.quantity}
          </span>
          <button
            onClick={() => increaseProduct(item)}
            className="text-2xl text-slate-100">
            +
          </button>
        </div>
        <div className="text-primary text-lg font-semibold flex flex-col">
          <span>
            <span className="text-slate-500">$</span>{' '}
            {item?.price * item?.quantity?.toFixed(2)}
          </span>
          <span className="text-sm text-slate-500">
            <span className="text-slate-500">$</span> {item?.price} / per item
          </span>
        </div>
        <div className="text-gray-600 cursor-pointer mr-5 hover:text-primary">
          <i className="text-xl" onClick={() => removeItemFromCart(item?.id)}>
            <FaRegTrashCan />
          </i>
        </div>
      </div>
    </>
  )
}
