import { Button } from '@/components/ui/button'
import { shippingDetails } from './index.data'

const ShippingDetail = () => {
  return (
    <>
      <div className='mt-6'>
        <h1 className='text-xl font-medium'>Shipping Information</h1>
        <div className='mt-6 grid grid-cols-2 gap-6'>
          {shippingDetails.map(shippingDetail => (
            <div key={shippingDetail.id}>
              <h6 className='text-neutral-400'>{shippingDetail.prop}</h6>
              <p>{shippingDetail.value}</p>
            </div>
          ))}
        </div>
        <Button size={'lg'} className='mt-6'>
          Save
        </Button>
      </div>
    </>
  )
}

export default ShippingDetail
