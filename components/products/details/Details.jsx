import { auth } from '@/auth'
import { getProductStock } from '@/utils/getProductStock'
import { getRatings } from '@/utils/getRatings'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { FaStar } from 'react-icons/fa6'
import AddToCart from '../AddToCart'
import AddToWishList from '../AddToWishList'
import ProductCard from '../ProductCard'
import QuantityBtn from '../QuantityBtn'
import ShareProduct from '../ShareProduct'
import Description from './Description'

export default async function Details({ product }) {
  const session = await auth()
  const ratings = getRatings(product?.ratings)
  const stock = getProductStock(product?.sku, product?.soldCounts)
  return (
    <>
      {/* <!-- product-detail --> */}
      <div class="container grid grid-cols-2 gap-6">
        <div>
          <Image
            src={product?.images[0]}
            alt={product?.title}
            className="w-full"
            width={900}
            height={900}
            // placeholder="blur"
            // blurDataURL={base64}
          />

          <div className="grid grid-cols-5 gap-4 mt-4">
            <Image
              src={product?.images[0]}
              alt="product2"
              className="w-full cursor-pointer border border-primary"
              width={500}
              height={500}
            />

            <Image
              src={product?.images[1]}
              alt="product2"
              className="w-full cursor-pointer border border-primary"
              width={500}
              height={500}
            />

            <Image
              src={product?.images[2]}
              alt="product2"
              className="w-full cursor-pointer border border-primary"
              width={500}
              height={500}
            />
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-medium uppercase mb-2">
            {product?.title}
          </h2>
          <div className="flex items-center mb-4">
            <div className="flex items-center gap-1 text-sm text-orange-400">
              {ratings.map((r, i) => (
                <span key={i}>
                  <i>
                    <FaStar />
                  </i>
                </span>
              ))}
              <span className="text-xs lg:text-sm">
                ({`${product?.ratings} Star`})
              </span>
            </div>
            <div className="text-xs text-gray-500 ml-3">
              ({product?.reviewsNumber} Reviews)
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
      {/* <!-- ./product-detail --> */}

      {/* <!-- description --> */}
      <Description />
      {/* <!-- ./description --> */}

      {/* <!-- related product --> */}
      <div class="container pb-16">
        <h2 class="text-2xl font-medium text-gray-800 uppercase mb-6">
          Related products
        </h2>
        <div class="grid grid-cols-4 gap-6">
          <ProductCard />
        </div>
      </div>
    </>
  )
}
