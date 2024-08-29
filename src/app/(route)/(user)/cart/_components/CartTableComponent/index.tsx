import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import Image from 'next/image'

const products = [
  {
    img: 'orange-bogota',
    name: 'Orange Bogota',
    owner: 'romi ardana',
    price: '$250.00',
    currency: 'USD'
  },
  {
    img: 'bubuk-maketi',
    name: 'Bubuk Maketi',
    owner: 'eka budiarta',
    price: '$150.00',
    currency: 'USD'
  },
  {
    img: 'sofa-ternyaman',
    name: 'Sofa Ternyaman',
    owner: 'adisur',
    price: '$350.00',
    currency: 'USD'
  }
]

export function CartTableComponent() {
  return (
    <Table className='mt-8'>
      <TableCaption>A list of your whishlists.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Image</TableHead>
          <TableHead>Name & Seller</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Menu</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map(product => (
          <TableRow key={product.name}>
            <TableCell className='sm:w-1/4'>
              <Image
                src={`/images/landing/landing-card-${product.img}.webp`}
                alt={product.name}
                width={300}
                height={100}
                priority={true}
                className='aspect-video h-full w-[200px] rounded-lg object-cover object-center'
              />
            </TableCell>
            <TableCell className='sm:w-1/4'>
              <div className='flex flex-col gap-2 font-medium'>
                <span>{product.name}</span>
                <span className='text-slate-400'>{product.owner}</span>
              </div>
            </TableCell>
            <TableCell className='sm:w-1/4'>
              <div className='flex flex-col gap-2 font-medium'>
                <span>{product.price}</span>
                <span className='text-slate-400'>{product.currency}</span>
              </div>
            </TableCell>
            <TableCell>
              <div className='flex items-center justify-center gap-4 sm:w-full'>
                <Button variant={'outline'} className='w-full' size={'lg'}>
                  Remove
                </Button>
                <Button className='w-full' size={'lg'}>
                  Buy it Now!
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className='text-right'>$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
