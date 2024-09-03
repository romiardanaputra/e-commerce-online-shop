import Image from 'next/image'

const TransactionDetail = () => {
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
            <div>
              <h3 className='text-neutral-500'>Customer Name</h3>
              <h4 className='font-medium'>Romi Ardana</h4>
            </div>
            <div>
              <h3 className='text-neutral-500'>Date of Transaction</h3>
              <h4 className='font-medium'>12 Januari, 2020</h4>
            </div>
            <div>
              <h3 className='text-neutral-500'>Total Amount</h3>
              <h4 className='font-medium'>$280.408</h4>
            </div>
          </div>
          <div className='w-full space-y-8'>
            <div>
              <h3 className='text-neutral-500'>Customer Name</h3>
              <h4 className='font-medium'>Romi Ardana</h4>
            </div>
            <div>
              <h3 className='text-neutral-500'>Date of Transaction</h3>
              <h4 className='font-medium'>12 Januari, 2020</h4>
            </div>
            <div>
              <h3 className='text-neutral-500'>Total Amount</h3>
              <h4 className='font-medium'>$280.408</h4>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default TransactionDetail
