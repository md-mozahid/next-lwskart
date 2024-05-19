import Billing from "@/components/checkout/Billing";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import OrderSummary from "@/components/checkout/OrderSummary";
import BreadCrumbs from "@/components/shared/BreadCrumbs";
import Link from "next/link";

export default  function CheckoutPage() {
  
  return (
    <>
      <BreadCrumbs />

      {/* <!-- wrapper --> */}
      <div className="container grid grid-cols-12 items-start pb-16 pt-4 gap-6">
        <div className="col-span-8 border border-gray-200 p-4 rounded">
          <h3 className="text-lg font-medium capitalize mb-4">Checkout</h3>
          <CheckoutForm />
        </div>
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
              className="text-gray-600 ml-3 cursor-pointer text-sm"
            >
              I agree to the{" "}
              <Link href="#" className="text-primary">
                terms & conditions
              </Link>
            </label>
          </div>

          <Link
            href="#"
            className="block w-full py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover:bg-transparent hover:text-primary transition font-medium"
          >
            Place order
          </Link>
        </div>
      </div>
      {/* <!-- ./wrapper --> */}
    </>
  );
}
