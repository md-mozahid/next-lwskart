import WishlistItem from "./WishlistItem";
import { getWishlistItems } from "@/app/actions";

export default async function Wishlist({ session }) {
  const wishlist = await getWishlistItems(session?.user?.email);
  // console.log("wishlist", wishlist);
  return (
    <div className="container gap-6 pt-4 pb-16">
      <div className="mx-auto space-y-4 max-w-6xl">
        {wishlist?.data?.length > 0 ? (
          wishlist?.data?.map((wish) => (
            <WishlistItem key={wish?.id} wishlist={wish} session={session} />
          ))
        ) : (
          <div className="text-2xl text-center">Wishlist is empty...</div>
        )}
      </div>
    </div>
  );
}
