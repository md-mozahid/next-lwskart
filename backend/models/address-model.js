import { addressType } from '@/utils/constants'
import mongoose, { Schema } from 'mongoose'

const addressSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
    address: [
      {
        title: {
          type: String,
          required: true,
          trim: true,
          min: 3,
          max: 50,
        },

        contact: {
          type: String,
          required: true,
          trim: true,
        },
        postalCode: {
          type: String,
          required: true,
          trim: true,
        },

        address: {
          type: String,
          required: true,
          trim: true,
        },

        houseName: {
          type: String,
          required: true,
          trim: true,
          min: 3,
          max: 50,
        },

        addressType: {
          type: String,
          required: true,
          enum: [addressType.shippingAddress, addressType.billingAddress],
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
)

export const addressModel =
  mongoose.models.address || mongoose.model('address', addressSchema)
