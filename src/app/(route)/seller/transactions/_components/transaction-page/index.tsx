import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import SellProduct from '../sell-product'
import BuyProduct from '../buy-product'

const TransactionPageComponent = () => {
  return (
    <main className='p-4 sm:px-6 sm:py-0'>
      <Tabs defaultValue='sellProduct' className='w-full'>
        <TabsList className='grid w-3/12 grid-cols-2'>
          <TabsTrigger value='sellProduct'>Sell Product</TabsTrigger>
          <TabsTrigger value='buyProduct'>Buy Product</TabsTrigger>
        </TabsList>
        <TabsContent value='sellProduct'>
          <SellProduct />
        </TabsContent>
        <TabsContent value='buyProduct'>
          <BuyProduct />
        </TabsContent>
      </Tabs>
    </main>
  )
}

export default TransactionPageComponent
