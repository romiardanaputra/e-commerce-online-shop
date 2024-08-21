import React from 'react'

import { Card, CardContent } from '@/components/ui/card'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'

const Category = () => {
  return (
    <>
      <div className='px-6'>
        <h1 className='mb-6 font-medium'>Trend Category</h1>

        <Carousel
          opts={{
            align: 'start',
            loop: true
          }}
          className='max-w-7xl pb-6'
        >
          <CarouselContent>
            {Array.from({ length: 6 }).map((_, index) => (
              <CarouselItem
                key={index}
                className='basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6'
              >
                <div className='p-1'>
                  <Card>
                    <CardContent className='flex aspect-square items-center justify-center p-6'>
                      <span className='text-3xl font-semibold'>
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  )
}

export default Category
