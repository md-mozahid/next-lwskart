"use client";
import AddressCard from "./AddressCard";
import CommonButton from "@/components/CommonButton";
import  { useState } from "react";
import AddAddressModal from "./AddAddressModal";
import { addressType } from "@/utils/constants";

export default function Address  ({ address, email })  {
  const [showAddAddressModal, setAddressModal] = useState(false);

  const [selectType, setSelectType] = useState(null);

  const shipping_address = address?.find(
    (a) => a?.address_type === addressType.shippingAddress
  );
  const billing_address = address?.find(
    (a) => a?.address_type === addressType.billingAddress
  );

  return (
    <>
      <div className="grid max-w-5xl grid-cols-2 gap-4 mx-auto">
        <div className="flex items-center justify-center">
          {billingAddress?.title ? (
            <AddressCard
              onOpen={() => {
                setSelectType(addressType.billingAddress);
                setAddressModal(true);
              }}
              title="Billing address"
              address={billing_address}
            />
          ) : (
            <CommonButton
              onClick={() => {
                setSelectType(addressType.billingAddress);
                setAddressModal(true);
              }}
              width="w-[210px]"
              btnLevel="Billing address"
              label=""
            />
          )}
        </div>

        <div className="flex items-center justify-center">
          {shipping_address?.title ? (
            <AddressCard
              onOpen={() => {
                setSelectType(addressType.shippingAddress);
                setAddressModal(true);
              }}
              title="Shipping address"
              address={shippingAddress}
            />
          ) : (
            <CommonButton
              onClick={() => {
                setAddressModal(true);
                setSelectType(addressType.shippingAddress);
              }}
              width="w-[210px]"
              btnLevel="Shipping address"
              label=""
            />
          )}
        </div>
      </div>
      <AddAddressModal
        email={email}
        type={selectType}
        open={showAddAddressModal}
        setOpen={setAddressModal}
        onClose={() => {
          setAddressModal(false);
        }}
        editData={
          selectType === addressType.shippingAddress
            ? shipping_address
            : billing_address
        }
      />
    </>
  );
};

