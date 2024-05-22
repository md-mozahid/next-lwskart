'use server'

import { signIn } from '@/auth'
import { baseUrl } from '@/utils/constants'

export async function login(formData) {
  try {
    const response = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false,
    })
    return response
  } catch (error) {
    throw new Error(error.message)
  }
}

// get cart products
export async function getCartProducts(email = '') {
  try {
    const response = await fetch(
      `${baseUrl}/api/cart?email=${encodeURIComponent(email)}`
    )
    const data = await response.json()
    return data
  } catch (err) {
    console.error('cart', err)
    return { error: err.message }
  }
}
