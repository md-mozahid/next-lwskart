import React from 'react'

export default function Billlws() {
  return (
    <>
      <div className="col-span-4 border border-gray-200 p-4 rounded">
        <h4 className="text-gray-800 text-lg mb-4 font-medium uppercase">
          order summary
        </h4>
        <div className="space-y-2">
          <OrderSummary />
        </div>

        <Billing />

        <div className="flex items-center mb-4 mt-2">
          <input
            type="checkbox"
            name="agreement"
            id="agreement"
            className="text-primary focus:ring-0 rounded-sm cursor-pointer w-3 h-3"
          />
          <label
            for="agreement"
            className="text-gray-600 ml-3 cursor-pointer text-sm">
            I agree to the{' '}
            <Link href="#" className="text-primary">
              terms & conditions
            </Link>
          </label>
        </div>

        <Link
          href="#"
          className="block w-full py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover:bg-transparent hover:text-primary transition font-medium">
          Place order
        </Link>
      </div>
    </>
  )
}
