import mongoose, { Schema } from "mongoose";

const cartSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    // Schema for an item in the shopping cart
    cartItems: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "products",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          default: 1,
        },
      },
    ],
  },
  { timestamps: true }
);

export const cartModel =
  mongoose.models.carts || mongoose.model("carts", cartSchema);
