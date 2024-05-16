import mongoose, { Schema } from 'mongoose'

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    discountPrice: {
      type: Number,
      required: true,
      default: 0,
    },
    stock: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    category: [
      {
        type: Array,
        required: true,
      },
    ],
    productCode: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    images: [
      {
        type: Array,
        required: true,
      },
    ],
  },
  {
    timestamps: true,
  }
)

export const productModel =
  mongoose.models.products ?? mongoose.model('products', productSchema)
