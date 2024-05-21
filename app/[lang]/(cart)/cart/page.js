import { auth } from '@/auth'
import Cart from '@/components/cart/cartitem/Cart'
import BreadCrumb from '@/components/shared/BreadCrumbs'

export default async function CartPage() {
  const session = await auth()
  return (
    <>
      <BreadCrumb />

      {session?.user ? (
        <>
          <Cart />
        </>
      ) : (
        <div className="text-center text-xl">
          Please login to see your cart items!
        </div>
      )}
    </>
  )
}
