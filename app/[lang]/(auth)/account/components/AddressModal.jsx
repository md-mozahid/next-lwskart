'use client'

import { addAddress } from '@/app/actions'
import { useEffect, useState } from 'react'
import CommonButton from './CommonButton'
import CommonInput from './CommonInput'
import CommonModal from './CommonModal'
import { toast } from 'react-toastify'

const AddAddressModal = ({ open, setOpen, type, email, editData, session }) => {
  const [title, setTitle] = useState('')
  const [address, setAddress] = useState('')
  const [contact, setContact] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [houseName, setHouseName] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const body = {
      email,
      title,
      address,
      contact,
      postalCode,
      houseName,
      addressType: type,
    }

    // if (session) {
    //   try {
    //     await fetch('/api/address', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({
    //         email,
    //         title,
    //         address,
    //         contact,
    //         postalCode,
    //         houseName,
    //         addressType: type,
    //       }),
    //     })
    //     toast.success('Address added to successfully done.')
    //   } catch (error) {
    //     console.error(error)
    //   }
    // } else {
    //   router.push('/login')
    // }

    const data = await addAddress(body)
    if (data.success) {
      toast.success('Address add successfully done.')
      setOpen(false)
    } else {
      toast.error('Address update error')
    }
  }

  useEffect(() => {
    setTitle(editData?.title)
    setAddress(editData?.address)
    setContact(editData?.contact)
    setPostalCode(editData?.postalCode)
    setHouseName(editData?.houseName)
  }, [editData])

  return (
    <div>
      <CommonModal
        open={open}
        setOpen={setOpen}
        body={
          <form onSubmit={handleSubmit} className="space-y-4">
            <CommonInput
              required={true}
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <CommonInput
              required={true}
              label="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <CommonInput
              required={true}
              label="Contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
            <CommonInput
              required={true}
              label="Postal Code"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
            <CommonInput
              required={true}
              label="House Name"
              value={houseName}
              onChange={(e) => setHouseName(e.target.value)}
            />
            <div className="flex items-center justify-center">
              <CommonButton type="submit" width="w-[120px]" btnLevel="Saved" />
            </div>
          </form>
        }
      />
    </div>
  )
}

export default AddAddressModal
