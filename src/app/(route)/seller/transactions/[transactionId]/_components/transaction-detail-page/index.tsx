import Image from 'next/image'
import React from 'react'
import ShippingDetail from '../shipping-detail'
import { transactionDetails } from './index.data'

const TransactionDetailPageComponent = () => {
  return (
    <main className='w-full p-4 sm:px-6 sm:py-0'>
      <div className='mt-12 flex gap-12'>
        <Image
          src='/images/transaction-detail.png'
          alt='Transaction Detail'
          width={800}
          height={600}
          className='aspect-square size-60 w-fit rounded-md bg-neutral-600 object-cover'
        />
        <div className='mt-4 grid w-full grid-cols-2'>
          <div className='w-full space-y-8'>
            {transactionDetails.slice(0, 3).map(transactionDetail => (
              <div key={transactionDetail.id}>
                <h3 className='text-neutral-500'>{transactionDetail.prop}</h3>
                <h4 className='font-medium'>{transactionDetail.value}</h4>
              </div>
            ))}
          </div>
          <div className='w-full space-y-8'>
            {transactionDetails.slice(3, 6).map(transactionDetail => (
              <div key={transactionDetail.id}>
                <h3 className='text-neutral-500'>{transactionDetail.prop}</h3>
                <h4 className='font-medium'>{transactionDetail.value}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ShippingDetail />
    </main>
  )
}

export default TransactionDetailPageComponent
