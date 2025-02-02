import { getCartItems, getWishlistItems } from '@/app/actions'
import { auth } from '@/auth'
import CartSection from '../cart/CartSection'
import Logo from '../shared/Logo'
import Search from '../shared/Search'

export default async function Header() {
  const session = await auth()
  const cart = await getCartItems(session?.user?.email)
  const wishlist = await getWishlistItems(session?.user?.email)
  return (
    <>
      <header className="py-4 shadow-sm bg-white">
        <div className="container flex items-center justify-between">
          <Logo />
          <Search />
          <CartSection
            session={session}
            cart={cart?.data}
            wishlist={wishlist?.data}
          />
        </div>
      </header>
    </>
  )
}
