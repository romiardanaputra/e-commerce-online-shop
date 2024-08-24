import Category from '@/components/category'
import Hero from '@/components/hero'
import ProductList from '@/components/product'
import { landingCardData, landingCategoryData } from '@/app/index.data'

const HomePage = () => {
  return (
    <>
      <div className='overflow-x-hidden'>
        <Hero />
        <Category landingCategoryData={landingCategoryData} />
        <ProductList landingCardData={landingCardData} />
      </div>
    </>
  )
}

export default HomePage
