'use client'

import { signOut } from 'next-auth/react'
const Logout = () => {
  return (
    <button
      className="text-white"
      onClick={() => {
        signOut({ callbackUrl: 'http://localhost:3000/login' })
      }}>
      Logout
    </button>
  )
}

export default Logout