import { categoryModel } from '@/models/category-model'
import { productModel } from '@/models/product-model'
import connectMongo from '@/services/connectMongo'
import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from '@/utils/data-utils'

export async function getAllProducts() {
  await connectMongo()
  const allProducts = await productModel.find().lean()
  return replaceMongoIdInArray(allProducts)
}

export async function getProducts(productId) {
  await connectMongo()
  const product = await productModel.findById(productId).lean()
  return replaceMongoIdInObject(product)
}

// get categories
export async function getAllCategories() {
  await connectMongo()
  const categories = await categoryModel.find().lean()
  return replaceMongoIdInArray(categories)
}
