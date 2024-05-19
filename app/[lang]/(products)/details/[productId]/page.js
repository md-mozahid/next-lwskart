import ProductDetails from '@/components/products/ProductDetails'
import BreadCrumbs from '@/components/shared/BreadCrumbs'
import { getSingleProduct } from "@/backend/database/queries";
import { notFound } from 'next/navigation'

export async function generateMetadata({ params: { productId } }) {
  const product = await getSingleProduct(productId)

  if (product) {
    return {
      title: `${product?.title}`,
      description: product?.description?.slice(0, 100),
      openGraph: {
        title: `${product?.title}`,
        siteName: 'LWSKart',
        url: `https://m-lwskart.vercel.app/products/${productId}`,
        type: 'website',
        images: [
          {
            url: product?.image,
            alt: product?.name,
            width: 1200,
            height: 600,
          },
        ],
      },
    }
  } else {
    return {
      title: 'Product Not Found',
      description: 'Product not found that requested by user.',
    }
  }
}

export default async function ProductDetailsPage({ params: { productId } }) {
  const product = await getSingleProduct(productId)
  if (!product) {
    notFound()
  }
  return (
    <>
      <BreadCrumbs />
      <ProductDetails product={product} />
    </>
  )
}
