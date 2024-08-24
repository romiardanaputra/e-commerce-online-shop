import React from 'react'
import Link from 'next/link'

import CarouselComponent from '../carousel'
import { landingCategoryDataProps } from '@/app/index.props'

type CategoryProps = {
  landingCategoryData: landingCategoryDataProps[]
}

const Category = ({ landingCategoryData }: CategoryProps) => {
  return (
    <>
      <div className='px-6'>
        <Link href='/'>
          <h1 className='mb-6 text-xl font-medium'>Trend Category</h1>
          <CarouselComponent
            landingCategoryData={landingCategoryData}
            orientation='horizontal'
            usedAt='home'
          />
        </Link>
      </div>
    </>
  )
}

export default Category
