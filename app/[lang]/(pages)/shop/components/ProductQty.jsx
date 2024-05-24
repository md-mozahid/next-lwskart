import { productModel } from '@/backend/models/product-model'
import connectMongo from '@/backend/services/connectMongo'

export default async function ProductQty({ name = '' }) {
  await connectMongo()
  const num = await productModel.find({ category: name }).count()
  return <div className="ml-auto text-gray-600 text-sm">{num ? num : 0}</div>
}
