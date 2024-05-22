import { getAllCategories } from "@/backend/database/queries";
import CategoryCard from './CategoryCard'
import { getDictionaries } from "@/app/[lang]/dictionaries/getDictionaries";

export default async function Categories({lang}) {
  const categories = await getAllCategories()
  const dictionary = await getDictionaries(lang)

  return (
    <div className="container py-16">
      <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
        {dictionary?.shop_by_category}
      </h2>
      <div className="grid grid-cols-3 gap-3">
        {categories?.map((category, i) => (
          <CategoryCard key={i} category={category} />
        ))}
      </div>
    </div>
  )
}
