import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { File, ListFilter } from 'lucide-react'
import React from 'react'
import { orders, tablists } from '../../index.data'
import { Badge } from '@/components/ui/badge'

const Order = () => {
  return (
    <>
      <Tabs defaultValue='week'>
        <div className='flex items-center'>
          <TabsList>
            {tablists.map(tablist => (
              <TabsTrigger key={tablist.value} value={tablist.value}>
                {tablist.name}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className='ml-auto flex items-center gap-2'>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant='outline'
                  size='sm'
                  className='h-7 gap-1 text-sm'
                >
                  <ListFilter className='h-3.5 w-3.5' />
                  <span className='sr-only sm:not-sr-only'>Filter</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end'>
                <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked>
                  Fulfilled
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Declined</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Refunded</DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button size='sm' variant='outline' className='h-7 gap-1 text-sm'>
              <File className='h-3.5 w-3.5' />
              <span className='sr-only sm:not-sr-only'>Export</span>
            </Button>
          </div>
        </div>
        <TabsContent value='week'>
          <Card x-chunk='dashboard-05-chunk-3'>
            <CardHeader className='px-7'>
              <CardTitle>Orders</CardTitle>
              <CardDescription>Recent orders from your store.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Customer</TableHead>
                    <TableHead className='hidden sm:table-cell'>Type</TableHead>
                    <TableHead className='hidden sm:table-cell'>
                      Status
                    </TableHead>
                    <TableHead className='hidden md:table-cell'>Date</TableHead>
                    <TableHead className='text-right'>Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orders.map((order, idx) => (
                    <TableRow className='bg-accent' key={idx}>
                      <TableCell>
                        <div className='font-medium'>{order.customer}</div>
                        <div className='text-muted-foreground hidden text-sm md:inline'>
                          {order.email}
                        </div>
                      </TableCell>
                      <TableCell className='hidden sm:table-cell'>
                        {order.type}
                      </TableCell>
                      <TableCell className='hidden sm:table-cell'>
                        <Badge className='text-xs' variant='secondary'>
                          {order.status}
                        </Badge>
                      </TableCell>
                      <TableCell className='hidden md:table-cell'>
                        2023-06-23
                      </TableCell>
                      <TableCell className='text-right'>
                        {order.amount}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  )
}

export default Order
