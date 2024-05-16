import { auth } from '@/auth'
import Link from 'next/link'
import Logout from './Logout'

export default async function SingIn() {
  const session = await auth()

  return (
    <>
      {session?.user ? (
        <div>
          <span className="text-white">{session?.user?.name}</span>
          <span className="mx-1 text-white">|</span>
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
