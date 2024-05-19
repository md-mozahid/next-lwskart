'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { FaChevronRight, FaHouse } from 'react-icons/fa6'

export default function BreadCrumbs({ breadCrumbs }) {
    const router = useRouter()
  const pathname = usePathname()

  const pathSegments = pathname.split('/').filter((segment) => segment)
  
  return (
    <div className="container py-4 flex items-center gap-3">
      <Link href="#" className="text-primary text-base">
        <i>
          <FaHouse />
        </i>
      </Link>
      <span className="text-sm text-gray-400">
        <i>
          <FaChevronRight />
        </i>
      </span>
      <p className="text-gray-600 font-medium">{breadCrumbs?.name}</p>
    </div>
  )
}
