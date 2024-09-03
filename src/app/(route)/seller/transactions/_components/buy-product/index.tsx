'use client'

import Image from 'next/image'
import { MoreHorizontal } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { sellerProducts, tableHeadDatas } from '../../../products/index.data'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'

const BuyProduct = () => {
  const router = useRouter()
  const handleProductDetail = () => {
    router.push('/seller/transaction/1')
  }
  return (
    <>
      <main className='grid flex-1 items-start gap-4 md:gap-8'>
        <Card x-chunk='dashboard-06-chunk-0'>
          <CardHeader>
            <CardTitle>Products</CardTitle>
            <CardDescription>
              Manage your products and view their sales performance.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  {tableHeadDatas.map(data => (
                    <TableHead
                      className={cn(
                        (data.name === 'Price' ||
                          data.name === 'Total Sales' ||
                          data.name === 'Created At') &&
                          'hidden md:table-cell',
                        data.name === 'Image' &&
                          'hidden w-[100px] sm:table-cell',
                        ''
                      )}
                      key={data.id}
                    >
                      {data.name === 'Image' || data.name === 'Action' ? (
                        <span className='sr-only'>{data.name}</span>
                      ) : (
                        data.name
                      )}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {sellerProducts.map(product => (
                  <TableRow
                    className='cursor-pointer'
                    key={product.id}
                    onClick={handleProductDetail}
                  >
                    <TableCell className='hidden sm:table-cell'>
                      <Image
                        alt='Product image'
                        className='aspect-square rounded-md object-cover'
                        height='64'
                        src='/placeholder.svg'
                        width='64'
                      />
                    </TableCell>
                    <TableCell className='font-medium'>
                      {product.name}
                    </TableCell>
                    <TableCell>
                      <Badge variant='outline'>{product.status}</Badge>
                    </TableCell>
                    <TableCell className='hidden md:table-cell'>
                      ${product.price}
                    </TableCell>
                    <TableCell className='hidden md:table-cell'>
                      {product.totalSale}
                    </TableCell>
                    <TableCell className='hidden md:table-cell'>
                      {product.createdAt}
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            aria-haspopup='true'
                            size='icon'
                            variant='ghost'
                          >
                            <MoreHorizontal className='h-4 w-4' />
                            <span className='sr-only'>Toggle menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align='end'>
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter>
            <div className='text-muted-foreground text-xs'>
              Showing <strong>1-10</strong> of <strong>32</strong> products
            </div>
          </CardFooter>
        </Card>
      </main>
    </>
  )
}

export default BuyProduct
