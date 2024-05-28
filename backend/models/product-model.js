import mongoose, { Schema } from 'mongoose'

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discountPrice: {
    type: Number,
    required: true,
  },
  reviewsNumber: {
    type: Number,
    required: true,
  },
  ratings: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  tags: [
    {
      type: String,
      required: true,
    },
  ],
  description: {
    type: String,
    required: true,
  },
  images: [
    {
      type: String,
      required: true,
    },
  ],
  sku: {
    type: String,
    required: true,
  },
  soldCounts: {
    type: Number,
    required: true,
  },
  isTrending: {
    type: Boolean,
    required: true,
  },
  isNewArrival: {
    type: Boolean,
    required: true,
  },
})

export const productModel =
  mongoose.models.products ?? mongoose.model('products', productSchema)
