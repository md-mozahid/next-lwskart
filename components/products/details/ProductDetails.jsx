import { auth } from '@/auth'
import { getProductStock } from '@/utils/getProductStock'
import { getRatings } from '@/utils/getRatings'
import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { FaStar } from 'react-icons/fa6'
import AddToCart from '../AddToCart'
import AddToWishList from '../AddToWishList'
import QuantityBtn from '../QuantityBtn'
import ShareProduct from '../ShareProduct'
import ImageSection from './ImageSection'
import RelatedProducts from './RelatedProducts'
import Description from './Description'

export default async function ProductDetails({ product }) {
  const session = await auth()
  const ratings = getRatings(product?.averageRating)
  const stock = getProductStock(product?.stock, product?.soldCounts)

  return (
    <>
      <div className="container grid grid-cols-2 gap-6">
        <ImageSection product={product} />

        <div>
          <h2 className="text-3xl font-medium uppercase mb-2">
            {product?.title}
          </h2>
          <div className="flex items-center mb-4">
            <div className="flex items-center gap-1 text-sm text-orange-400">
              {ratings.map((_, i) => (
                <span key={i}>
                  <i>
                    <FaStar />
                  </i>
                </span>
              ))}
              <span className="text-xs lg:text-sm">
                ({`${product?.averageRating} Star`})
              </span>
            </div>
            <div className="text-xs text-gray-500 ml-3">
              ({product?.reviewCount} Reviews)
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-gray-800 font-semibold space-x-2">
              <span>Availability: </span>
              <span className="text-green-600">{stock}</span>
            </p>
            <p className="space-x-2">
              <span className="text-gray-800 font-semibold">Brand: </span>
              <span className="text-gray-600">{product?.brand}</span>
            </p>
            <p className="space-x-2">
              <span className="text-gray-800 font-semibold ">Category: </span>
              <span className="text-gray-600 uppercase">
                {product?.category}
              </span>
            </p>
            <p className="space-x-2">
              <span className="text-gray-800 font-semibold">SKU: </span>
              <span className="text-gray-600">{product?.sku}</span>
            </p>
          </div>
          <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
            <p className="text-xl text-primary font-semibold">
              ${product?.discountPrice}
            </p>
            <p className="text-base text-gray-400 line-through">
              ${product?.price}
            </p>
          </div>

          <p className="mt-4 text-gray-600">{product?.description}</p>

          <div className="mt-4">
            <h3 className="text-sm text-gray-800 uppercase mb-1">Quantity</h3>
            <QuantityBtn />
          </div>

          <div className="mt-6 flex items-center gap-3 border-b border-gray-200 pb-5 pt-5">
            <AddToCart session={session} product={product} />
            <AddToWishList session={session} product={product} />
            <ShareProduct />
          </div>

          <div className="flex gap-3 mt-4">
            <Link
              href="#"
              className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
              <i className="">
                <FaFacebookF />
              </i>
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
              <i className="">
                <FaTwitter />
              </i>
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
              <i className="">
                <FaInstagram />
              </i>
            </Link>
          </div>
        </div>
      </div>
      <Description />
      <RelatedProducts relatedProduct={product?.category} />
    </>
  )
}
