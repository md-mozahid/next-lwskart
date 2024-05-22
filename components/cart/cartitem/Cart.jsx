import { getCartProducts } from '@/app/actions'
import { auth } from '@/auth'
import CartItem from './CartItem'
import { getCart } from '@/backend/database/queries'

export default async function Cart() {
  const session = await auth()
  const cartItems = await getCart(session?.user?.email)
  console.log('cartItems', cartItems)
  return (
    <div className="container gap-6 pt-4 pb-16">
      <div className="mx-auto space-y-4 max-w-6xl">
        {cartItems?.length > 0 ? (
          cartItems?.map((item) => (
            <CartItem key={item?.id} item={item} />
          ))
        ) : (
          <div className="text-2xl text-center">Product cart is empty...</div>
        )}
      </div>
    </div>
  )
}
