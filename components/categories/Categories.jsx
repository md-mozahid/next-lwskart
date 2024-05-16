import { getAllCategories } from '@/database/queries'
import CategoryCard from './CategoryCard'

export default async function Categories() {
  const categories = await getAllCategories()

  return (
    <div className="container py-16">
      <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
        shop by category
      </h2>
      <div className="grid grid-cols-3 gap-3">
        {categories?.map((category) => (
          <CategoryCard key={category?.category} category={category} />
        ))}
      </div>
    </div>
  )
}
