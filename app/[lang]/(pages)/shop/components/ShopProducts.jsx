import { productModel } from '@/backend/models/product-model'
import connectMongo from '@/backend/services/connectMongo'
import ProductCard from '@/components/products/ProductCard'

export default async function ShopProducts({ searchParams }) {
  await connectMongo()

    let products = []
    let query = {}

    if(searchParams?.category) {
        query.category = { $in: searchParams.category.split(',') }
    }

    if (searchParams?.minPrice || searchParams?.maxPrice) {
        query.price = {}
        if (searchParams?.minPrice) {
          query.price.$gte = searchParams.minPrice
        }
        if (searchParams?.maxPrice) {
          query.price.$lte = searchParams.maxPrice
        }
    }
  products = await productModel.find(query)
  return (
    <div className="col-span-3">
      <div className="grid md:grid-cols-3 grid-cols-2 gap-6">
        {products?.map((product) => (
          <ProductCard key={product?.id} product={product} />
        ))}
      </div>
    </div>
  )
}
