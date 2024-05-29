'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Search({ text }) {
  const [searchTerm, setSearchTerm] = useState('')
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  // Initialize the search term from URL parameters
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString())
    const initialSearch = params.get('search') || ''
    setSearchTerm(initialSearch)
  }, [searchParams])

  const handleSubmit = (e) => {
    e.preventDefault()

    updateURLParams(searchTerm)
  }

  const handleInputChange = (e) => {
    const value = e.target.value
    setSearchTerm(value)
  }

  const handleInputClear = (e) => {
    if (!e.target.value) {
      updateURLParams('')
    }
  }

  const updateURLParams = (term) => {
    // Extract the language segment from the pathname
    const pathSegments = pathname.split('/')
    const langSegment = pathSegments[1]

    // Create a new URLSearchParams object from the current URL's search parameters
    const params = new URLSearchParams(searchParams.toString())

    // Set the new search term or clear it if empty
    if (term.trim() !== '') {
      params.set('search', term)
    } else {
      params.delete('search')
    }

    // Construct the new URL with the language segment and combined query parameters
    const newUrl = `/${langSegment}/shop?${params.toString()}`
    router.replace(newUrl)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full max-w-xl relative flex">
        <span className="absolute left-4 top-3 text-lg text-gray-400">
          <i className="fa-solid fa-magnifying-glass"></i>
        </span>

        <input
          type="search"
          name="search"
          id="search"
          className="w-full border border-primary border-r-0 pl-4 py-3 pr-3 rounded-l-md focus:outline-none hidden md:flex"
          placeholder={text}
          value={searchTerm}
          onChange={handleInputChange}
          onInput={handleInputClear}
        />

        <button className="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition hidden md:flex md:items-center">
          Search
        </button>
      </div>
    </form>
  )
}
