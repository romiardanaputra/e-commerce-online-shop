import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'

import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

import { productDataProps } from '@/app/(route)/detail/index.props'
import Image from 'next/image'

export type CarouselComponentProps = {
  orientation: 'horizontal' | 'vertical' | undefined
  usedAt?: string
  productData: productDataProps[]
}
const CarouselComponent: React.FC<CarouselComponentProps> = ({
  orientation,
  usedAt,
  productData
}) => {
  return (
    <>
      <div className='py-4'>
        <Carousel
          opts={{
            align: 'start',
            loop: true
          }}
          className='max-w-7xl pb-6'
          orientation={orientation}
        >
          <CarouselContent
            className={cn(orientation === 'vertical' ? 'h-96' : '')}
          >
            {productData.map((data, index) => (
              <CarouselItem
                key={index}
                className={cn(
                  usedAt === 'home'
                    ? `basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6`
                    : `basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/4 ${orientation === 'vertical' ? 'xl:basis-1/2' : ''}`
                )}
              >
                <div className='p-1'>
                  <Card className='flex h-40 items-center justify-center'>
                    <CardContent className='relative flex aspect-square size-full items-center justify-center p-6'>
                      <Image
                        src={`/images/details/detailProduct-preview-${data.img}.webp`}
                        width={400}
                        height={400}
                        alt={data.name}
                        quality={100}
                        className='absolute aspect-auto size-full rounded-lg bg-neutral-500 object-cover'
                      />
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

export default CarouselComponent
