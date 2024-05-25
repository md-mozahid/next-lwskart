'use client'
import { addressType } from '@/utils/constants'
import { useState } from 'react'
import AddressCard from './AddressCard'
import AddressModal from './AddressModal'
import CommonButton from './CommonButton'

export default function Address({ address, email, session }) {
  const [showAddAddressModal, setAddressModal] = useState(false)

  const [selectType, setSelectType] = useState(null)

  const shippingAddress = address?.find(
    (a) => a?.addressType === addressType.shippingAddress
  )
  const billingAddress = address?.find(
    (a) => a?.addressType === addressType.billingAddress
  )

  return (
    <>
      <div className="grid max-w-5xl grid-cols-2 gap-4 mx-auto">
        <div className="flex items-center justify-center ">
          {billingAddress?.title ? (
            <AddressCard
              onOpen={() => {
                setSelectType(addressType.billingAddress)
                setAddressModal(true)
              }}
              title="Billing address"
              address={billingAddress}
            />
          ) : (
            <CommonButton
              onClick={() => {
                setSelectType(addressType.billingAddress)
                setAddressModal(true)
              }}
              width="w-[210px]"
              btnLevel="Billing address"
              label=""
            />
          )}
        </div>

        <div className="flex items-center justify-center">
          {shippingAddress?.title ? (
            <AddressCard
              onOpen={() => {
                setSelectType(addressType.shippingAddress)
                setAddressModal(true)
              }}
              title="Shipping address"
              address={shippingAddress}
            />
          ) : (
            <CommonButton
              onClick={() => {
                setAddressModal(true)
                setSelectType(addressType.shippingAddress)
              }}
              width="w-[210px]"
              btnLevel="Shipping address"
              label=""
            />
          )}
        </div>
      </div>
      <AddressModal
        session={session}
        email={email}
        type={selectType}
        open={showAddAddressModal}
        setOpen={setAddressModal}
        onClose={() => {
          setAddressModal(false)
        }}
        editData={
          selectType === addressType.shippingAddress
            ? shippingAddress
            : billingAddress
        }
      />
    </>
  )
}
