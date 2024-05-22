import Banner from '@/components/featured/Banner'
import Features from '@/components/featured/Features'
import Categories from '@/components/categories/Categories'
import NewArrival from '@/components/newArrival/NewArrival'
import ProductAds from '@/components/newArrival/ProductAds'
import TrendingProducts from '@/components/newArrival/TrendingProducts'

export default function Home({params: {lang}}) {

  return (
    <>
      <Banner lang={lang} />
      <Features lang={lang} />
      <Categories lang={lang} />
      <NewArrival lang={lang} />
      <ProductAds lang={lang} />
      <TrendingProducts lang={lang} />
    </>
  )
}
