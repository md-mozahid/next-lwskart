import { getDictionaries } from "@/app/[lang]/dictionaries/getDictionaries";
import { getNewArrival } from "@/backend/database/queries";
import ProductCard from "../products/ProductCard";

export default async function NewArrival({ lang }) {
  const newArrival = await getNewArrival(true);
  const dictionary = await getDictionaries(lang);

  // console.log('newArrival', newArrival)
  return (
    <div className="container pb-16">
      <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
        {dictionary?.top_new_arrival}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {newArrival?.slice(0, 4).map((arrival) => (
          <ProductCard key={arrival?.id} product={arrival} />
        ))}
      </div>
    </div>
  );
}
