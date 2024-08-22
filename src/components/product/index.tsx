import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { products } from './index.data'
import Image from 'next/image'
import Link from 'next/link'

const ProductList = () => {
  return (
    <>
      <div className='px-6'>
        <h1 className='mb-6 font-medium'>Product List</h1>

        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {products.map(product => (
            <Link href={'/detail'} key={product.id}>
              <Card className='w-full max-[480px]:w-full'>
                <CardHeader>
                  <Image
                    src={''}
                    alt=''
                    width={200}
                    height={200}
                    className='h-40 w-full bg-neutral-500'
                  />
                  <CardTitle className='text-base'>{product.name}</CardTitle>
                  <CardDescription>${product.price}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default ProductList
