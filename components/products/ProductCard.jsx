import { auth } from '@/auth'
import Image from 'next/image'
import Link from 'next/link'
import { FaMagnifyingGlass, FaStar } from 'react-icons/fa6'
import AddToCart from './AddToCart'
import AddToWishList from './AddToWishList'

export default async function ProductCard({ product }) {
  const session = await auth()

  return (
    <div className="bg-white shadow rounded overflow-hidden group">
      <div className="relative">
        <Image
          src={product?.thumbnail}
          alt={product?.title}
          className="w-full h-64"
          width={500}
          height={500}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
          <Link
            href={`/details/${product?.id}`}
            className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
            title="view product">
            <i>
              <FaMagnifyingGlass />
            </i>
          </Link>
          <AddToWishList session={session} product={product} card={true} />
        </div>
      </div>
      <div className="pt-4 pb-3 px-4">
        <Link href={`/details/${product?.id}`}>
          <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
            {product?.title}
          </h4>
        </Link>
        <div className="flex items-baseline mb-1 space-x-2">
          <p className="text-xl text-primary font-semibold">
            ${product?.discountPrice}
          </p>
          <p className="text-sm text-gray-400 line-through">
            ${product?.price}
          </p>
        </div>
        <div className="flex items-center">
          <div className="flex gap-1 text-sm text-yellow-400">
            <span>
              <i className="fa-solid fa-star">
                <FaStar />
              </i>
            </span>
          </div>
          <div className="text-xs text-gray-500 ml-3">(150 Reviews)</div>
        </div>
      </div>
      <AddToCart session={session} product={product} className={'w-full'} />
    </div>
  )
}
