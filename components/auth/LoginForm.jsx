'use client'

import { login } from '@/app/actions'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useFormStatus } from 'react-dom'
import { toast } from 'react-toastify'

export default function LoginForm() {
  const [error, setError] = useState('')
  const router = useRouter()

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const formData = new FormData(e.currentTarget)
      const response = await login(formData)
      // console.log(response)
      if (!!response.error) {
        setError(response.error)
      } else {
        router.push('/')
        toast.success('Login successful.')
      }
    } catch (err) {
      setError(err)
    }
  }

  // use form status hook
  function Button() {
    const { pending } = useFormStatus()
    return (
      <button
        disabled={pending}
        type="submit"
        className={`${
          pending ? 'bg-slate-500' : 'bg-primary'
        } btn-primary btn-fw`}>
        {pending ? 'Logging...' : 'Login'}
      </button>
    )
  }
  return (
    <>
      {error && <div className="text-xl text-red-500 text-center">{error}</div>}
      <form method="post" onSubmit={handleLogin}>
        <div className="space-y-2">
          <div>
            <label htmlFor="email" className="text-gray-600 mb-2 block">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
              placeholder="youremail.@domain.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-gray-600 mb-2 block">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
              placeholder="*******"
            />
          </div>
        </div>
        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center">
            <input
              type="checkbox"
              name="remember"
              id="remember"
              className="text-primary focus:ring-0 rounded-sm cursor-pointer"
            />
            <label htmlFor="remember" className="text-gray-600 ml-3 cursor-pointer">
              Remember me
            </label>
          </div>
          <Link href="#" className="text-primary">
            Forgot password
          </Link>
        </div>
        <div className="mt-4">
          <Button />
        </div>
      </form>
    </>
  )
}
