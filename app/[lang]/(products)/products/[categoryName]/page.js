import ProductCard from '@/components/products/ProductCard'
import BreadCrumb from '@/components/shared/BreadCrumbs'
import { getProductsByCategory } from "@/backend/database/queries";
import { getDictionaries } from '@/app/[lang]/dictionaries/getDictionaries';

export default async function ProductsByCategory({ params: { categoryName, lang } }) {
  const decodeCategoryName = decodeURIComponent(categoryName).toLowerCase()
  const products = await getProductsByCategory(decodeCategoryName)
  const dictionary = await getDictionaries(lang)

  return (
    <>
      <BreadCrumb />
      <div className="container py-12">
        <div className="grid grid-cols-3 gap-3">
          {products?.map((product) => (
            <ProductCard
              key={product?.id}
              product={product}
              dictionary={dictionary}
            />
          ))}
        </div>
      </div>
    </>
  )
}
