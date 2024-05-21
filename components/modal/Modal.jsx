'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

export default function Modal({ children }) {
  const modalRef = useRef(null)
  const router = useRouter()

  useEffect(() => {
    if (!modalRef.current?.open) {
      modalRef.current?.showModal()
    }
  }, [])

  function onHide() {
    router.back()
  }
  return createPortal(
    <dialog
      ref={modalRef}
      onClose={onHide}
      className="w-[80%] shadow-teal-700 shadow-md border border-teal-600 flex flex-col p-2 rounded-md dark:bg-gray-300 dark:bg-opacity-95 dark:text-gray-700">
      <span onClick={onHide} className="flex justify-end cursor-pointer ">
        <Image
          className=""
          src="/xmark.svg"
          alt="close"
          width={30}
          height={30}
        />
      </span>
      {children}
    </dialog>,
    document.getElementById('modal-root-content')
  )
}
