import { getDictionaries } from "@/app/[lang]/dictionaries/getDictionaries";
import ProductCard from "@/components/products/ProductCard";

export default async function ShopProducts({ products, lang }) {
  const dictionary = await getDictionaries(lang);
  return (
    <>
      <div className="col-span-3">
        <div className="grid md:grid-cols-3 grid-cols-2 gap-6">
          {products?.length > 0 ? (
            products?.map((product) => (
              <ProductCard
                key={product?.id}
                product={product}
                dictionary={dictionary}
              />
            ))
          ) : (
            <div className="col-span-3">
              <h1 className="text-2xl text-center">No Product Found</h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
