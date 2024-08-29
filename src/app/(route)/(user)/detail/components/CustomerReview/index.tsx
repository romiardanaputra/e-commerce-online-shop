import Image from 'next/image'

const CustomerReviewComponent = () => {
  return (
    <>
      <div className='my-8 xl:max-w-4xl'>
        <h2 className='my-6 text-lg font-medium text-neutral-800'>
          Customer Review (20)
        </h2>
        <div className='flex gap-4'>
          <Image
            src={''}
            alt=''
            width={200}
            height={200}
            className='aspect-auto size-14 rounded-full bg-neutral-500'
          />
          <div className='mt-4 space-y-2'>
            <h6 className='font-medium'>Kadek Romi Ardana Putra</h6>
            <p className='leading-relaxed text-neutral-500'>
              I thought it was not good for living room. I really happy to
              decided buy this product last week now feels like homey.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default CustomerReviewComponent
