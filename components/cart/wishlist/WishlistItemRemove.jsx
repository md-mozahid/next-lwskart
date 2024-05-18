"use client";

import { useCart } from "@/hooks/useCart";
import { FaRegTrashCan } from "react-icons/fa6";
import { toast } from "react-toastify";

export default function WishlistItemRemove({ wishlist }) {
  const { removeItemFromWishlist } = useCart();
  return (
    <div className="text-gray-600 cursor-pointer mr-5 hover:text-primary">
      <i
        className="text-xl"
        onClick={() => {
          removeItemFromWishlist(wishlist?.id);
          toast.success("Product remove from wishlist.");
        }}
      >
        <FaRegTrashCan />
      </i>
    </div>
  );
}
