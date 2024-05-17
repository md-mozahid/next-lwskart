'use client'

import { CartContext } from '@/context'
import { useEffect, useState } from 'react'

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const [wishlist, setWishlist] = useState([])

  // fetch cart to state
  useEffect(() => {
    setCartToState()
    setWishlistToState()
  }, [])

  // set cart to state
  const setCartToState = () => {
    setCart(
      localStorage.getItem('cart')
        ? JSON.parse(localStorage.getItem('cart'))
        : []
    )
  }

  const setWishlistToState = () => {
    setWishlist(
      localStorage.getItem('wishlist')
        ? JSON.parse(localStorage.getItem('wishlist'))
        : []
    )
  }

  // add item to cart
  const addItemToCart = async ({
    id,
    title,
    price,
    thumbnail,
    stock,
    quantity = 1,
  }) => {
    const item = {
      id,
      title,
      price,
      thumbnail,
      stock,
      quantity,
    }

    const isItemExist = cart?.cartItems?.find((i) => i.id === item.id)

    let newCartItems

    if (isItemExist) {
      newCartItems = cart?.cartItems?.map((i) =>
        i.id === isItemExist.id ? item : i
      )
    } else {
      newCartItems = [...(cart?.cartItems || []), item]
    }

    localStorage.setItem('cart', JSON.stringify({ cartItems: newCartItems }))
    setCartToState()
  }

  // remove item
  const removeItemFromCart = (id) => {
    const newCartItems = cart?.cartItems?.filter((item) => item?.id !== id)
    localStorage.setItem('cart', JSON.stringify({ cartItems: newCartItems }))
    setCartToState()
  }

  // add wish list
  const addItemToWishlist = async ({ id, title, price, thumbnail, stock }) => {
    const item = {
      id,
      title,
      price,
      thumbnail,
      stock,
    }

    const isItemExist = wishlist?.wishlistItems?.find((i) => i.id === item.id)

    let newWishlistItems

    if (isItemExist) {
      newWishlistItems = wishlist?.wishlistItems?.map((i) =>
        i.id === isItemExist.id ? item : i
      )
    } else {
      newWishlistItems = [...(wishlist?.wishlistItems || []), item]
    }

    localStorage.setItem(
      'wishlist',
      JSON.stringify({ wishlistItems: newWishlistItems })
    )
    setWishlistToState()
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        addItemToCart,
        removeItemFromCart,
        addItemToWishlist,
      }}>
      {children}
    </CartContext.Provider>
  )
}
