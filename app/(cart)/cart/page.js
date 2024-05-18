import { auth } from '@/auth'
import Cart from '@/components/cart/cartitem/Cart'

export default async function CartPage() {
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
        <p className="text-gray-600 font-medium">Your Cart Items</p>
      </div>
      {session?.user ? (
        <Cart />
      ) : (
        <div className="text-center text-xl">
          Please login to see your cart items!
        </div>
      )}
    </>
  )
}
