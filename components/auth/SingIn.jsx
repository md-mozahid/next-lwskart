import { auth } from '@/auth'
import Link from 'next/link'
import Logout from './Logout'

export default async function SingIn() {
  const session = await auth()

  return (
    <>
      {session?.user ? (
        <div className="flex items-center justify-center">
          <span className="text-white rounded-full border border-slate-700 size-10 flex items-center justify-center">
            {session?.user?.name?.charAt(0)}
          </span>
          <span className="mx-2 text-white">|</span>
          <Logout />
        </div>
      ) : (
        <Link
          href="/login"
          className="text-gray-200 hover:text-white transition">
          Login
        </Link>
      )}
    </>
  )
}
