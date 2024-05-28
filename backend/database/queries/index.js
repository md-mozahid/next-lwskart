import { cartModel } from '@/backend/models/cart-model'
import { categoryModel } from '@/backend/models/category-model'
import { productModel } from '@/backend/models/product-model'
import { userModel } from '@/backend/models/user-model'
import connectMongo from '@/backend/services/connectMongo'
import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from '@/utils/data-utils'

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
    console.error('Error finding product:', error.message)
    return null
  }
}

// get related product
export async function getRelatedProducts(category) {
  try {
    await connectMongo()
    const allProducts = await productModel.find().lean()
    const relatedProducts = allProducts.filter(
      (product) => product.category === category
    )
    return replaceMongoIdInArray(relatedProducts)
  } catch (error) {
    console.error('Error in related product:', error.message)
    return null
  }
}

// get categories
export async function getAllCategories() {
  await connectMongo()
  const categories = await categoryModel.find().lean()
  return replaceMongoIdInArray(categories)
}

// get cart product
export async function getCart(email) {
  try {
    await connectMongo()
    const user = await userModel.findOne({ email: email })
    const cart = await cartModel.findOne({ user: user._id })
    // const userCart = allCartProduct.filter((cart) => cart.user === email)
    // console.log('userCart', userCart)
    if (cart) {
      return replaceMongoIdInArray(cart)
    }
  } catch (error) {
    console.error('Error fetching cart product:', error.message)
    return null
  }
}

// delete item from cart
export async function removeCartItem(itemId) {
  try {
    await connectMongo()
    const allCartItems = await cartModel.findByIdAndDelete(itemId)
    // const filteredCartItem = allCartItems.filter((item) => item._id === itemId)

    return replaceMongoIdInArray(allCartItems)
  } catch (error) {
    console.error('An error occurred in cart removing', error.message)
  }
}

// get new arrival
export async function getNewArrivalProducts() {
  try {
    await connectMongo()
    const newArrival = await productModel
      .find({ newArrival: true })
      
    return replaceMongoIdInArray(newArrival)
    // console.log('newArrival', newArrival)
  } catch (error) {
    console.log(error)
  }
}
