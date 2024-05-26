import { getRelatedProducts } from "@/backend/database/queries";
import ProductCard from "../ProductCard";

export default async function RelatedProducts({ relatedProduct }) {
  const products = await getRelatedProducts(relatedProduct);

  return (
    <div class="container pb-16">
      <h2 class="text-2xl font-medium text-gray-800 uppercase mb-6">
        Related products
      </h2>
      <div class="grid grid-cols-4 gap-6">
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product?.id} product={product}/>
        ))}
      </div>
    </div>
  );
}
