import { categoryModel } from "@/backend/models/category-model";
import { productModel } from "@/backend/models/product-model";
import connectMongo from "@/backend/services/connectMongo";
import { replaceMongoIdInArray, replaceMongoIdInObject } from '@/utils/data-utils'

export async function getAllProducts() {
  try {
    await connectMongo()
    const allProducts = await productModel.find().lean()
    return replaceMongoIdInArray(allProducts)
  } catch (error) {
    console.error('Error fetching products:', error.message)
    throw new Error('Failed to fetch products')
  }
}

export async function getProductsByCategory(categoryName) {
  try {
    await connectMongo()
    const categories = await productModel
      .find({ category: categoryName })
      .lean()
    return replaceMongoIdInArray(categories)
  } catch (error) {
    console.error('Error fetching products:', error.message)
    throw new Error('Failed to fetch products')
  }
}

export async function getSingleProduct(productId) {
  try {
    await connectMongo()
    const product = await productModel.findById(productId).lean()
    if (product) {
      return replaceMongoIdInObject(product)
    }
  } catch (error) {
    console.error('Error finding single product:', error.message)
    return null
  }
}

// get categories
export async function getAllCategories() {
  await connectMongo()
  const categories = await categoryModel.find().lean()
  return replaceMongoIdInArray(categories)
}
