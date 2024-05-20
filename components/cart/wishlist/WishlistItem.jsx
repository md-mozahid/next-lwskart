import AddToCart from '@/components/products/AddToCart'
import Image from 'next/image'
import WishlistItemRemove from './WishlistItemRemove'

export default function WishlistItem({ wishlist, session }) {
  console.log('wishlist item', wishlist)
  return (
    <div className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
      <div className="w-28">
        <Image
          src={wishlist?.images}
          alt={wishlist?.title}
          className="w-full size-20"
          width={300}
          height={300}
        />
      </div>
      <div className="w-1/3">
        <h2 className="text-gray-800 text-xl font-medium uppercase">
          {wishlist?.title}
        </h2>
        <p className="text-gray-500 text-sm">
          Availability: <span className="text-green-600">In Stock</span>
        </p>
      </div>
      <div className="text-primary text-lg font-semibold">
        ${wishlist?.price}
      </div>
      <AddToCart session={session} product={wishlist} className={'text-sm'} />
      <WishlistItemRemove wishlist={wishlist} />
    </div>
  )
}
