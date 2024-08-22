import Image from 'next/image'
import CarouselComponent from '@/components/carousel'
import { productDataProps } from '../../index.props'

type PreviewProductProps = {
  productData: productDataProps[]
}

const PreviewProductComponent = ({ productData }: PreviewProductProps) => {
  return (
    <>
      <div className='w-full xl:flex xl:gap-4'>
        <Image
          src={`/images/details/detailProduct-preview-${productData[0].img}.webp`}
          alt={productData[0].name}
          width={200}
          height={200}
          priority
          quality={100}
          className='aspect-auto h-72 w-full rounded-lg bg-neutral-500 object-cover md:h-96'
        />
        <div className='xl:hidden'>
          <CarouselComponent
            productData={productData}
            orientation='horizontal'
            usedAt='detailProduct'
          />
        </div>
        <div className='hidden w-1/3 xl:block'>
          <CarouselComponent
            productData={productData}
            orientation='vertical'
            usedAt='detailProduct'
          />
        </div>
      </div>
    </>
  )
}
export default PreviewProductComponent
