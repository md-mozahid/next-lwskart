import { getAddress } from '@/app/actions';
import { auth } from '@/auth';
import AddToCart from '@/components/products/AddToCart';
import BreadCrumb from '@/components/shared/BreadCrumbs'

export default async function AccountPage() {
  const session = await auth();
  const address = await getAddress(session?.user?.email);
  return (
    <>
      <BreadCrumb />
      <div className="container  items-start gap-6 pt-4 pb-16">
        <div className=" grid grid-cols-3 gap-4 mx-auto max-w-5xl">
          <div className="shadow rounded bg-white px-4 pt-6 pb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-gray-800 text-lg">
                Personal Profile
              </h3>
              <a href="#" className="text-primary">
                Edit
              </a>
            </div>
            <div className="space-y-1">
              <h4 className="text-gray-700 font-medium">John Doe</h4>
              <p className="text-gray-800">example@mail.com</p>
              <p className="text-gray-800">0811 8877 988</p>
            </div>
          </div>
          <AddToCart />
        </div>
      </div>
    </>
  )
}
