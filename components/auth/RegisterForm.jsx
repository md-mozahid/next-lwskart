'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useFormStatus } from 'react-dom'

export default function RegisterForm() {
  const [error, setError] = useState('')

  const router = useRouter()

  async function handleCreate(e) {
    e.preventDefault()

    try {
      const formData = new FormData(e.currentTarget)
      const name = formData.get('name')
      const email = formData.get('email')
      const password = formData.get('password')
      const confirm = formData.get('confirm')

      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application.json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
          confirm,
        }),
      })
      response.status === 201 && router.push('/login')
    } catch (err) {
      setError(err.message)
    }
  }

  function Button() {
    const { pending } = useFormStatus()
    return (
      <button
        disabled={pending}
        type="submit"
        className={`${
          pending ? 'bg-slate-500' : 'bg-primary'
        } btn-primary btn-fw`}>
        {pending ? 'Creating Account...' : 'Create Account'}
      </button>
    )
  }
  return (
    <>
      <div className="text-xl text-red-500 text-center">{error && error}</div>
      <form method="post" onSubmit={handleCreate}>
        <div className="space-y-2">
          <div>
            <label htmlFor="name" className="text-gray-600 mb-2 block">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
              placeholder="fulan fulana"
            />
          </div>
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
          <div>
            <label htmlFor="confirm" className="text-gray-600 mb-2 block">
              Confirm password
            </label>
            <input
              type="password"
              name="confirm"
              id="confirm"
              className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
              placeholder="*******"
            />
          </div>
        </div>
        <div className="mt-6">
          <div className="flex items-center">
            <input
              type="checkbox"
              name="aggrement"
              id="aggrement"
              className="text-primary focus:ring-0 rounded-sm cursor-pointer"
            />
            <label
              for="aggrement"
              className="text-gray-600 ml-3 cursor-pointer">
              I have read and agree to the{' '}
              <Link href="#" className="text-primary">
                terms & conditions
              </Link>
            </label>
          </div>
        </div>
        <div className="mt-4">
          <Button />
        </div>
      </form>
    </>
  )
}
