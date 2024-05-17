import Link from 'next/link'
import SingIn from '../auth/SingIn'
import Dropdown from './Dropdown'

export default function Navbar() {
  return (
    <nav className="bg-gray-800">
      <div className="container flex">
        <div className="px-8 py-4 bg-primary md:flex items-center cursor-pointer relative group hidden">
          <span className="text-white">
            <i className="fa-solid fa-bars"></i>
          </span>
          <span className="capitalize ml-2 text-white">
            All Categories
          </span>

          {/* <!-- dropdown --> */}
          <Dropdown />
        </div>

        <div className="flex items-center justify-between flex-grow md:pl-12 py-5">
          <div className="flex items-center space-x-6 capitalize">
            <Link
              href="/"
              className="text-gray-200 hover:text-white transition">
              Home
            </Link>
            <Link
              href="/shop"
              className="text-gray-200 hover:text-white transition">
              Shop
            </Link>
            <Link
              href="#"
              className="text-gray-200 hover:text-white transition">
              About us
            </Link>
            <Link
              href="#"
              className="text-gray-200 hover:text-white transition">
              Contact us
            </Link>
          </div>
          <SingIn />
        </div>
      </div>
    </nav>
  )
}
