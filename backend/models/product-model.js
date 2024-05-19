import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
  title: {
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
  availability: {
    type: Boolean,
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
  details: {
    type: Object,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  images: [
    {
      type: Array,
      required: true,
    },
  ],
  productCode: {
    type: String,
    required: true,
  },
  sizes: [
    {
      type: Array,
      required: true,
    },
  ],
  colors: [
    {
      type: Array,
      required: true,
    },
  ],
  sku: {
    type: Number,
    required: true,
  },
  soldCounts: {
    type: Number,
    required: true,
  },
});

export const productModel =
  mongoose.models.products ?? mongoose.model("products", productSchema);
