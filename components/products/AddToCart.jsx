"use client";

import { getCartItems } from "@/app/actions";
import { useCart } from "@/hooks/useCart";
import { useRouter } from "next/navigation";
import { FaBagShopping } from "react-icons/fa6";
import { toast } from "react-toastify";

export default function AddToCart({ session, product, className, dictionary }) {
  const { totalCart, setTotalCart } = useCart();
  const router = useRouter();

  const handleClick = async () => {
    if (session?.user) {
      try {
        const response = await fetch("/api/cart", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: session?.user?.email,
            productId: product?.id,
            quantity: 1,
            thumbnail: product?.thumbnail,
          }),
        });

        if (response.success) {
          const cart = await getCartItems(session?.user?.email);
          setTotalCart(cart?.data?.length);
        }
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
      {/* {dictionary ? dictionary?.add_to_card : 'Add to Cart'} */}
    </button>
  );
}
