import SideBar from '@/app/[lang]/(pages)/shop/components/sidebar/SideBar'
import BreadCrumb from '@/components/shared/BreadCrumbs'
import DrawerToggle from './components/DrawerToggle'
import ToggleContent from './components/ToggleContent'
import ShopProducts from './components/ShopProducts'
import { getAllProducts } from '@/backend/database/queries/getAllProducts'


export default async function ShopPage({ searchParams}) {
  const search = searchParams?.search || "";
  const category = searchParams?.category || "";
  const minPrice = searchParams?.minPrice || "";
  const maxPrice = searchParams?.maxPrice || "";
  const ratings = searchParams?.ratings || "";
  const sort = searchParams?.sort || "";
  const size = searchParams?.size || "";

   const products = await getAllProducts({
     search,
     category,
     minPrice,
     maxPrice,
     ratings,
     sort,
     size,
   });
  return (
    <>
      <BreadCrumb />
      <div className="container grid md:grid-cols-4 grid-cols-2 gap-6 pt-4 pb-16 items-start">
        <DrawerToggle />
        <ToggleContent />
        <SideBar />
        {products && <ShopProducts products={products} />}
      </div>
    </>
  );
}
