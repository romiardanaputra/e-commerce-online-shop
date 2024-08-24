import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { products } from './index.data'
import Image from 'next/image'
import Link from 'next/link'
import { landingCardDataProps } from '@/app/index.props'

type ProductListProps = {
  landingCardData: landingCardDataProps[]
}

const ProductList = ({ landingCardData }: ProductListProps) => {
  return (
    <>
      <div className='px-6'>
        <h1 className='mb-6 text-xl font-medium'>Product List</h1>

        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {landingCardData.map(product => (
            <Link href={'/detail'} key={product.id}>
              <Card className='w-full max-[480px]:w-full'>
                <CardContent className='p-6'>
                  <Image
                    src={`/images/landing/landing-card-${product.img}.webp`}
                    alt={product.name}
                    width={200}
                    height={200}
                    className='mb-4 aspect-square h-40 w-full rounded-lg bg-neutral-500 object-cover sm:h-32 xl:h-40'
                  />
                  <CardTitle className='text-base'>{product.name}</CardTitle>
                  <CardDescription>${product.price}</CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default ProductList
