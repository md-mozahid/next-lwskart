'use client'

const { useCart } = require("@/hooks/useCart");
const { useRouter } = require("next/navigation");

export const HandleWishlistBtn = () => {
    const { cart, wishlist } = useCart();
    const router = useRouter();
  if (session?.user) {
    router.push("/wishlist");
  } else {
    router.push("/login");
  }
};
