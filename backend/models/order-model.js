import mongoose, { Schema } from 'mongoose'

const orderSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  items: [
    {
      product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products',
      },
      orderQty: {
        type: Number,
        required: true,
      },
    },
  ],
  paymentStatus: {
    type: String,
    enum: ['pending', 'completed', 'cancelled', 'refund'],
    required: true,
    default: 'pending',
  },
  orderStatus: {
    type: String,
    enum: ['ordered', 'packed', 'shipped', 'delivered'],
    required: true,
    default: 'ordered',
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
})

export const orderModel =
  mongoose.models.order ?? mongoose.model('order', orderSchema)
