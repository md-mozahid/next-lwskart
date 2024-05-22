import { getDictionaries } from '@/app/[lang]/dictionaries/getDictionaries'
import Link from 'next/link'
import SingIn from '../auth/SingIn'
import LanguageSwitcher from '../lang/LanguageSwitcher'
import Theme from '../theme/Theme'
import Dropdown from './Dropdown'

export default async function Navbar({ lang }) {
  const dictionary = await getDictionaries(lang)
  return (
    <nav className="bg-gray-800">
      <div className="container flex">
        <div className="px-8 py-4 bg-primary md:flex items-center cursor-pointer relative group hidden">
          <span className="text-white">
            <i className="fa-solid fa-bars"></i>
          </span>
          <span className="capitalize ml-2 text-white">All Categories</span>

          {/* <!-- dropdown --> */}
          <Dropdown />
        </div>

        <div className="flex items-center justify-between flex-grow md:pl-12 py-5">
          <div className="flex items-center space-x-6 capitalize">
            <Link
              href="/"
              className="text-gray-200 hover:text-white transition">
              {dictionary?.home}
            </Link>
            <Link
              href="/shop"
              className="text-gray-200 hover:text-white transition">
              {dictionary?.shop}
            </Link>
            <Link
              href="/about"
              className="text-gray-200 hover:text-white transition">
              {dictionary?.about}
            </Link>

            <Link
              href="/contact"
              className="text-gray-200 hover:text-white transition">
              {dictionary?.contact}
            </Link>
          </div>
          <div className="flex items-center justify-center gap-2">
            <SingIn />
            <LanguageSwitcher />
            <Theme />
          </div>
        </div>
      </div>
    </nav>
  )
}
