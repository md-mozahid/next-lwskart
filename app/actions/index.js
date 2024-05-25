'use server'

import { signIn } from '@/auth'
import { baseUrl } from '@/utils/constants'
import { revalidatePath } from 'next/cache'

export async function login(formData) {
  try {
    const response = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false,
    })
    return response
  } catch (error) {
    console.log('error: ', error)
    return { error: error.message }
  }
}

// get cart products
export async function getCartItems(email = '') {
  try {
    const response = await fetch(
      `${baseUrl}/api/cart?email=${encodeURIComponent(email)}`
    )
    const data = await response.json()
    return data
  } catch (error) {
    console.error('cart', error)
    return { error: error.message }
  }
}

// get wishlist products
export async function getWishlistItems(email = '') {
  try {
    const response = await fetch(
      `${baseUrl}/api/wishlist?email=${encodeURIComponent(email)}`
    )
    const data = await response.json()
    return data
  } catch (error) {
    console.error('wishlist', error)
    return { error: error.message }
  }
}

// add a new order
export async function addOrder(body) {
  try {
    const res = await fetch(`${baseUrl}/api/order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    const data = await res.json()
    revalidatePath('/checkout')
    return data
  } catch (error) {
    console.log('error: ', error)
    return { error: error.message }
  }
}

// get address
export async function getAddress(email = '') {
  try {
    const response = await fetch(
      `${baseUrl}/api/address?email=${encodeURIComponent(email)}`
    )
    const data = await response.json()
    return data
  } catch (error) {
    console.log('error: ', error)
    return { error: error.message }
  }
}

// add address
export async function addAddress(body) {
  try {
    const response = await fetch(`${baseUrl}/api/address`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    const data = await response.json()
    revalidatePath('/en/checkout')
    return data
  } catch (error) {
    console.log('error: ', error)
    return { error: error.message }
  }
}
