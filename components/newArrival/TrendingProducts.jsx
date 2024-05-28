import { getDictionaries } from "@/app/[lang]/dictionaries/getDictionaries";
import ProductCard from "../products/ProductCard";
import { getTrendingProducts } from "@/backend/database/queries";

export default async function TrendingProducts({ lang }) {
  const dictionary = await getDictionaries(lang);
  const trending = await getTrendingProducts(true);
  // console.log(trending.length)
  return (
    <div className="container pb-16">
      <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
        {dictionary?.trending}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {trending?.slice(0, 4).map((trend) => (
          <ProductCard key={trend?.id} product={trend} />
        ))}
      </div>
    </div>
  );
}
