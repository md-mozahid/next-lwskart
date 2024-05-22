import { getDictionaries } from '@/app/[lang]/dictionaries/getDictionaries'
import ProductCard from '../products/ProductCard'

export default async function TrendingProducts({ lang }) {
  const dictionary = await getDictionaries(lang)
  return (
    <div className="container pb-16">
      <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
        {dictionary?.trending}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <ProductCard />
      </div>
    </div>
  )
}
