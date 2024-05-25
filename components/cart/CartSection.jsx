"use client";

import { getCartItems } from "@/app/actions";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaCartShopping, FaHeart } from "react-icons/fa6";

export default function CartSection({ session, cart, wishlist }) {
  const [cartItems, setCartItems] = useState("");
  // console.log(cartItems)
  const router = useRouter();
  const handleClick = (query) => {
    if (session?.user) {
      router.push(`/${query}`);
    } else {
      router.push("/login");
    }
  };

  useEffect(() => {
    const cartItems = async () => {
      const data = await getCartItems(session?.user?.email);
      setCartItems(data?.data);
    };
    cartItems();
  }, [session?.user?.email]);

  // useEffect(() => {
  //   const getCartItems = async () => {
  //     try {
  //       const response = await fetch(
  //         `${baseUrl}/api/cart?email=${encodeURIComponent(
  //           session?.user?.email
  //         )}`
  //       );
  //       const data = await response.json();
  //       return data;
  //     } catch (error) {
  //       console.error("cart", error);
  //       return { error: error.message };
  //     }
  //   };
  //   getCartItems();
  // }, [session?.user?.email]);

  // console.log(data)
  return (
    <div className="flex items-center space-x-4">
      {/* wishlist */}
      <button
        onClick={() => handleClick("wishlist")}
        className="text-center text-gray-700 hover:text-primary transition relative"
      >
        <div className="text-[24px]">
          <i>
            <FaHeart />
          </i>
        </div>
        <div className="absolute -right-3 -top-3 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
          {(session?.user && wishlist?.length) || 0}
        </div>
      </button>

      {/* cart items */}
      <button
        onClick={() => handleClick("cart")}
        className="text-center text-gray-700 hover:text-primary transition relative"
      >
        <div className="text-2xl">
          <i className="fa-solid fa-bag-shopping"></i>
        </div>
        <div className="text-[24px] leading-3">
          <i className="">
            <FaCartShopping />
          </i>
        </div>
        <div className="absolute -right-3 -top-3 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
          {(session?.user && cartItems?.length) || 0}
        </div>
      </button>

      {/* account */}
      <button
        onClick={() => handleClick("account")}
        className="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300 hover:text-primary transition"
      >
        <div className="text-2xl">
          <i className="fa-regular fa-user"></i>
        </div>
        <div className="text-[14px] leading-3">Account</div>
      </button>
    </div>
  );
}
