import SideBar from '@/app/[lang]/(pages)/shop/components/sidebar/SideBar'
import { getAllProducts } from '@/backend/database/queries'
import ProductCard from '@/components/products/ProductCard'
import BreadCrumb from '@/components/shared/BreadCrumbs'
import DrawerToggle from './components/DrawerToggle'
import ToggleContent from './components/ToggleContent'
import ShopProducts from './components/ShopProducts'

export default async function ShopPage({ searchParams}) {
  const allProducts = await getAllProducts()
  return (
    <>
      <BreadCrumb />
      <div className="container grid md:grid-cols-4 grid-cols-2 gap-6 pt-4 pb-16 items-start">
        <DrawerToggle />
        <ToggleContent />
        <SideBar />
        <ShopProducts searchParams={searchParams}  />
      </div>
    </>
  )
}
