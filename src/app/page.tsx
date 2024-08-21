import Category from '@/components/category'
import Hero from '@/components/hero'
import Navbar from '@/components/navbar'
import ProductList from '@/components/product'
import Image from 'next/image'

const Home = () => {
  return (
    <>
      <div className='overflow-x-hidden xl:container'>
        <Navbar />
        <Hero />
        <Category />
        <ProductList />
      </div>
    </>
  )
}

export default Home
