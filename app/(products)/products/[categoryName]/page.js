import ProductCard from '@/components/products/ProductCard'
import { getProductsByCategory } from '@/database/queries'

export default async function ProductsByCategory({ params: { categoryName } }) {
  const decodeCategoryName = decodeURIComponent(categoryName).toLowerCase()
  const products = await getProductsByCategory(decodeCategoryName)

  return (
    <div className="container py-16">
      <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
        {decodeCategoryName}
      </h2>
      <div className="grid grid-cols-3 gap-3">
        {products?.map((product) => (
          <ProductCard key={product?.id} product={product} />
        ))}
      </div>
    </div>
  )
}
