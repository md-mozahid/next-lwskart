import { getDictionaries } from "@/app/[lang]/dictionaries/getDictionaries";
import { getSingleProduct } from "@/backend/database/queries";
import Modal from "@/components/modal/Modal";
import ProductDetails from "@/components/products/details/ProductDetails";
import { notFound } from "next/navigation";

export async function generateMetadata({ params: { productId }, parent }) {
  const product = await getSingleProduct(productId);

  return {
    title: product?.title,
    description: product?.description?.slice(0, 100),
  };
}

export default async function ProductIntercept({
  params: { productId, lang },
}) {
  const dictionary = await getDictionaries(lang);
  const product = await getSingleProduct(productId);
  if (!product) {
    notFound();
  }
  return (
    <Modal>
      <section>
        <div>
          <ProductDetails product={product} dictionary={dictionary} />
        </div>
      </section>
    </Modal>
  );
}
