'use client'

import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'next-share'
import { useEffect, useRef, useState } from 'react'

export default function ShareProduct() {
  const [show, setShow] = useState(false)
  const shareRef = useRef(null)

  useEffect(() => {
    function handleClickOutSide(e) {
      if (shareRef.current && !shareRef.current.contains(e.target))
        setShow(false)
    }
    document.addEventListener('mousedown', handleClickOutSide)

    // clean
    return () => {
      document.removeEventListener('mousedown', handleClickOutSide)
    }
  }, [shareRef])

  // find current url
  const CurrentUrl = () => {
    const [currentPageUrl, setCurrentPageUrl] = useState('')

    useEffect(() => {
      const setUrl = () => {
        if (typeof window !== 'undefined') {
          setCurrentPageUrl(window.location.href)
        }
      }
      setUrl()
    }, [])
    return currentPageUrl
  }

  const currentPageUrl = CurrentUrl()
  return (
    <>
      <div className="relative">
        <div
          ref={shareRef}
          className={`transition-opacity ${
            show ? 'opacity-100' : 'hidden'
          } bg-slate-200 w-64 h-20 px-1.5 py-2.5 rounded-xl absolute bottom-10 -right-6 flex items-center justify-center gap-5`}>
          <FacebookShareButton url={currentPageUrl}>
            <FacebookIcon
              size={40}
              className="rounded-xl hover:scale-110 transition-all"
            />
          </FacebookShareButton>
          <TwitterShareButton url={currentPageUrl}>
            <TwitterIcon
              size={40}
              className="rounded-xl hover:scale-110 transition-all"
            />
          </TwitterShareButton>
          <LinkedinShareButton url={currentPageUrl}>
            <LinkedinIcon
              size={40}
              className="rounded-xl hover:scale-110 transition-all"
            />
          </LinkedinShareButton>
          <WhatsappShareButton url={currentPageUrl}>
            <WhatsappIcon
              size={40}
              className="rounded-xl hover:scale-110 transition-all"
            />
          </WhatsappShareButton>
        </div>
        <div
          className="flex gap-2 text-gray-600 cursor-pointer hover:text-[#0E79F6]"
          onClick={() => setShow(!show)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            <path d="M8.7 10.7l6.6 -3.4" />
            <path d="M8.7 13.3l6.6 3.4" />
          </svg>
          <span>Share</span>
        </div>
      </div>
    </>
  )
}
