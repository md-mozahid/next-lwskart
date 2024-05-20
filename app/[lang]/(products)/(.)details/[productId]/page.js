import { getSingleProduct } from '@/backend/database/queries'
import Modal from '@/components/modal/Modal'
import ProductDetails from '@/components/products/details/ProductDetails'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params: { productId }, parent }) {
  const product = await getSingleProduct(productId)

  return {
    title: product?.title,
    description: product?.description?.slice(0, 100),
  }
}

export default async function ProductIntercept({ params: { productId } }) {
  const product = await getSingleProduct(productId)
  if (!product) {
    notFound()
  }
  return (
    <Modal>
      <section>
        {/* <div className="grid grid-cols-12 container gap-8 justify-items-center"> */}
        <div>
          <ProductDetails product={product} />
        </div>
      </section>
    </Modal>
  )
}
