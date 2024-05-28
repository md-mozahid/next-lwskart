import mongoose, { Schema } from 'mongoose'

const wishlistSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
    // Schema for an item in the wishlist
    wishlistItems: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'products',
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
)

export const wishlistModel =
  mongoose.models.wishlist || mongoose.model('wishlist', wishlistSchema)
