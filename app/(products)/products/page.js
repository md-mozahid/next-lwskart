import ProductCard from '@/components/products/ProductCard'
import { getProductsByCategory } from '@/database/queries'

export default async function ProductPage() {
  const product = await getProductsByCategory('bedroom')
  // console.log(product)
  return (
    <div className="container py-16">
      <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
        shop by category
      </h2>
      <div className="grid grid-cols-3 gap-3">
        <ProductCard />
      </div>
    </div>
  )
}
