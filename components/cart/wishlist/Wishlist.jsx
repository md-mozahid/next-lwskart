'use client'

import { useCart } from '@/hooks/useCart'
import WishlistItem from './WishlistItem'

export default function Wishlist({ session }) {
  const { wishlist } = useCart()
  console.log('wishlist', wishlist)
  return (
    <div className="container gap-6 pt-4 pb-16">
      <div className="mx-auto space-y-4 max-w-6xl">
        {wishlist?.wishlistItems?.length > 0 ? (
          wishlist?.wishlistItems?.map((wish) => (
            <WishlistItem key={wish?.id} wishlist={wish} session={session} />
          ))
        ) : (
          <div className="text-2xl text-center">Wishlist is empty...</div>
        )}
      </div>
    </div>
  )
}
