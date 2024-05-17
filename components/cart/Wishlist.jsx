'use client'

import { useCart } from '@/hooks/useCart'
import WishlistItems from './WishlistItems'

export default function Wishlist() {
  const { wishlist } = useCart()
  return (
    <div className="container gap-6 pt-4 pb-16">
      <div className="mx-auto space-y-4 max-w-6xl">
        {wishlist?.wishlistItems?.length > 0 ? (
          wishlist?.wishlistItems?.map((wish) => (
            <WishlistItems key={wish?.id} wishlist={wish} />
          ))
        ) : (
          <div className="text-2xl text-center">Wishlist is empty...</div>
        )}
      </div>
    </div>
  )
}
