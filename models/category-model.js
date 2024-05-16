import mongoose, { Schema } from 'mongoose'

const categorySchema = new Schema({
  categoryName: {
    required: true,
    type: String,
  },
  image: {
    required: false,
    type: String,
  },
})

export const categoryModel =
  mongoose.models.category ?? mongoose.model('category', categorySchema)
