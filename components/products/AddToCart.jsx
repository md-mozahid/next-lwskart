"use client";

import { useRouter } from "next/navigation";
import { FaBagShopping } from "react-icons/fa6";
import { toast } from "react-toastify";

export default function AddToCart({ session, product, className, dictionary }) {
  const router = useRouter();

  const handleClick = async () => {
    if (session?.user) {
      try {
        await fetch("/api/cart", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: session?.user?.email,
            productId: product?.id,
            quantity: product?.sku,
            image: product?.images[0],
          }),
        });
        toast.success("Product added to cart.");
      } catch (err) {
        console.error(err);
      }
    } else {
      router.push("/login");
    }
  };

  return (
    <button onClick={handleClick} className={`btn-primary ${className}`}>
      <i className="">
        <FaBagShopping />
      </i>
      {dictionary?.add_to_card}
    </button>
  );
}
