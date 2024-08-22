import React from 'react'

import Navbar from '@/components/navbar'
import BreadcrumbComponent from '@/components/breadcrumb'
import PreviewProductComponent from './components/PreviewProduct'
import CustomerReviewComponent from './components/CustomerReview'
import ProductDetailComponent from './components/ProductDetail'
import { productData } from './_data/index.data'
import { productContent } from './_data/index.data'

const DetailProductPage = () => {
  return (
    <>
      <div className='overflow-x-hidden sm:container'>
        <Navbar />
        <div className='min-h-screen px-6'>
          <BreadcrumbComponent />
          <PreviewProductComponent productData={productData} />
          <ProductDetailComponent productContent={productContent} />
          <CustomerReviewComponent />
        </div>
      </div>
    </>
  )
}

export default DetailProductPage
