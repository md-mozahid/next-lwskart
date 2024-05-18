import { auth } from '@/auth'
import Wishlist from '@/components/cart/wishlist/Wishlist'

export default async function WishList() {
  const session = await auth()
  return (
    <>
      <div className="container py-4 flex items-center gap-3">
        <a href="../index.html" className="text-primary text-base">
          <i className="fa-solid fa-house"></i>
        </a>
        <span className="text-sm text-gray-400">
          <i className="fa-solid fa-chevron-right"></i>
        </span>
        <p className="text-gray-600 font-medium">Wishlist Products</p>
      </div>
      {session?.user ? (
        <Wishlist session={session} />
      ) : (
        <div className="text-center text-xl">
          Please login to see your wishlist items!
        </div>
      )}
    </>
  )
}
