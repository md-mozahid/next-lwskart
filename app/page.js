import Banner from '@/components/featured/Banner'
import Features from '@/components/featured/Features'
import Categories from '@/components/categories/Categories'
import NewArrival from '@/components/newArrival/NewArrival'
import ProductAds from '@/components/newArrival/ProductAds'
import TrendingProducts from '@/components/newArrival/TrendingProducts'

export default function Home() {
  return (
    <>
      <Banner />
      <Features />
      <Categories />
      <NewArrival />
      <ProductAds />
      <TrendingProducts />
    </>
  )
}
