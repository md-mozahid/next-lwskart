import ProductCard from "@/components/products/ProductCard";
import BreadCrumb from "@/components/shared/BreadCrumbs";
import FilterCategory from "@/components/shop/FilterCategory";
import SideBar from "@/components/shop/sidebar/SideBar";
import { getAllProducts } from "@/backend/database/queries";
import Link from "next/link";

export default async function ShopPage() {
  const allProducts = await getAllProducts()
  return (
    <>
      <BreadCrumb />

      {/* <!-- shop wrapper --> */}
      <div className="container grid md:grid-cols-4 grid-cols-2 gap-6 pt-4 pb-16 items-start">
        {/* <!-- sidebar --> */}
        {/* <!-- drawer init and toggle --> */}
        <div className="text-center md:hidden">
          <button
            className="text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block md:hidden"
            type="button"
            data-drawer-target="drawer-example"
            data-drawer-show="drawer-example"
            aria-controls="drawer-example">
            <ion-icon name="grid-outline"></ion-icon>
          </button>
        </div>

        {/* <!-- drawer component --> */}
        <div
          id="drawer-example"
          className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80 dark:bg-gray-800"
          tabindex="-1"
          aria-labelledby="drawer-label">
          <h5
            id="drawer-label"
            className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
            <svg
              className="w-5 h-5 mr-2"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clip-rule="evenodd"></path>
            </svg>
            Info
          </h5>
          <button
            type="button"
            data-drawer-hide="drawer-example"
            aria-controls="drawer-example"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
          <div className="divide-y divide-gray-200 space-y-5">
            <div>
              <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                Categories
              </h3>
              <div className="space-y-2">
                <FilterCategory />
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                Price
              </h3>
              <div className="mt-4 flex items-center">
                <input
                  type="text"
                  name="min"
                  id="min"
                  className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
                  placeholder="min"
                />
                <span className="mx-3 text-gray-500">-</span>
                <input
                  type="text"
                  name="max"
                  id="max"
                  className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
                  placeholder="max"
                />
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                size
              </h3>
              <div className="flex items-center gap-2">
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    id="size-xs"
                    className="hidden"
                  />
                  <label
                    for="size-xs"
                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
                    XS
                  </label>
                </div>
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    id="size-sm"
                    className="hidden"
                  />
                  <label
                    for="size-sm"
                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
                    S
                  </label>
                </div>
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    id="size-m"
                    className="hidden"
                  />
                  <label
                    for="size-m"
                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
                    M
                  </label>
                </div>
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    id="size-l"
                    className="hidden"
                  />
                  <label
                    for="size-l"
                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
                    L
                  </label>
                </div>
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    id="size-xl"
                    className="hidden"
                  />
                  <label
                    for="size-xl"
                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
                    XL
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Link
              href="#"
              className="px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
              Learn more
            </Link>
            <Link
              href="#"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Get access{' '}
              <svg
                className="w-4 h-4 ml-2"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
            </Link>
          </div>
        </div>

        {/* <!-- ./sidebar --> */}
        <SideBar />
        {/* <!-- products --> */}
        <div className="col-span-3">
          <div className="grid md:grid-cols-3 grid-cols-2 gap-6">
            {allProducts?.map((product) => (
              <ProductCard key={product?.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
