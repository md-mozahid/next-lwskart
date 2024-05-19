"use client";

import { useCart } from "@/hooks/useCart";
import { useRouter } from "next/navigation";
import { FaBagShopping } from "react-icons/fa6";
import { toast } from "react-toastify";

export default function AddToCart({ session, product, className }) {
  const router = useRouter();
  const { addItemToCart } = useCart();

  const handleClick = () => {
    if (session?.user) {
      addItemToCart({
        id: product?.id,
        title: product?.title,
        price: product?.price,
        thumbnail: product?.images[0],
        stock: product?.stock,
        quantity: product?.quantity,
      });
      toast.success("Product added to cart.");
    } else {
      router.push("/login");
    }
  };
  return (
    <button onClick={handleClick} className={`btn-primary ${className}`}>
      <i className="">
        <FaBagShopping />
      </i>
      Add to cart
    </button>
  );
}
