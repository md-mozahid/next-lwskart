import { getDictionaries } from '@/app/[lang]/dictionaries/getDictionaries'
import { getSingleProduct } from '@/backend/database/queries'
import Details from '@/components/products/details/Details'
import ProductDetails from '@/components/products/details/ProductDetails'
import BreadCrumbs from '@/components/shared/BreadCrumbs'
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

export default async function ProductDetailsPage({ params: { productId, lang } }) {
  const product = await getSingleProduct(productId)
  const dictionary = await getDictionaries(lang);
  if (!product) {
    notFound()
  }
  return (
    <>
      <BreadCrumbs />
      <ProductDetails product={product} dictionary={dictionary} />
    </>
  );
}
