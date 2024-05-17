import Image from 'next/image'
import Link from 'next/link'

export default function WishlistItems({ wishlist }) {
  return (
    <div className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
      <div className="w-28">
        <Image
          src={wishlist?.thumbnail}
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
      <Link
        href="#"
        className="px-6 py-2 text-center text-sm text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">
        add to cart
      </Link>

      <div className="text-gray-600 cursor-pointer hover:text-primary">
        <i className="fa-solid fa-trash"></i>
      </div>
    </div>
  )
}
