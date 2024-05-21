'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

export default function Search({ title, category }) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const [searchTerm, setSearchTerm] = useState({
    title,
    category,
  })
  const [allowSearch, setAllowSearch] = useState(true)

  const handleInputs = (e) => {
    const name = e.target.name
    const value = e.target.value

    const state = { ...searchTerm, [name]: value }
    setSearchTerm(state)
  }

  const doSearch = (e) => {
    const params = new URLSearchParams(searchParams)

    params.set('title', searchTerm?.title || 'all')
  }

  return (
    <div className="w-full max-w-xl relative flex">
      <span className="absolute left-4 top-3 text-lg text-gray-400">
        <i className="fa-solid fa-magnifying-glass"></i>
      </span>
      <input
        onChange={handleInputs}
        type="text"
        name="search"
        id="search"
        className="w-full border border-primary border-r-0 pl-4 py-3 pr-3 rounded-l-md focus:outline-none hidden md:flex"
        placeholder="Search..."
      />
      <button
        onClick={doSearch}
        disabled={!allowSearch}
        className="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition hidden md:flex md:items-center">
        Search
      </button>
    </div>
  )
}
