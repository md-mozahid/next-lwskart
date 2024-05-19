import { auth } from '@/auth'
import Wishlist from '@/components/cart/wishlist/Wishlist'
import BreadCrumb from '@/components/shared/BreadCrumbs'

export default async function WishList() {
  const session = await auth()
  return (
    <>
      <BreadCrumb />
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
