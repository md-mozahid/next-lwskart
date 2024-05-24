import { getAllProducts } from '@/backend/database/queries'
import { findUniqueCategoryName } from '@/utils/getCategories'
import FilterByCategory from '../FilterByCategory'
import FilterByPrice from '../FilterByPrice'
import FilterBySize from '../FilterBySize'
import ProductQty from '../ProductQty'
import { ProductCategory } from '@/utils/ProductCategory'

export default async function SideBar() {
  const allProducts = await getAllProducts()
  const categories = findUniqueCategoryName(allProducts)

  return (
    <div className="col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hidden hidden md:block">
      <div className="divide-y divide-gray-200 space-y-5">
        <FilterByCategory>
          {ProductCategory?.map((item) => (
            <ProductQty key={item?.id} name={item?.name} />
          ))}
        </FilterByCategory>
        <FilterByPrice />
        <FilterBySize />
      </div>
    </div>
  )
}
