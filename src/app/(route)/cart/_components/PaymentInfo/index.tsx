import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const PaymentInfoComponent = () => {
  const paymentDetails = [
    {
      id: 1,
      price: 234,
      title: 'Country Tax'
    },
    {
      id: 2,
      price: 13.4,
      title: 'Product Insurance'
    },
    {
      id: 3,
      price: 100,
      title: 'Shipping Cost'
    },
    {
      id: 4,
      price: 15.3,
      title: 'Total'
    }
  ]

  return (
    <>
      <section className='pt-20'>
        <h1 className='mb-8 font-bold'>Payment Informations</h1>
        <div className='grid grid-cols-1 place-items-center gap-4 sm:grid-cols-2 lg:grid-cols-5'>
          {paymentDetails.map(item => (
            <Card key={item.id} className='w-full'>
              <CardContent className='p-6'>
                <div className='font-medium'>${item.price}</div>
                <h6 className='text-sm text-slate-400'>{item.title}</h6>
              </CardContent>
            </Card>
          ))}

          <Button className='w-full sm:col-span-2 lg:col-span-1'>
            Buy it Now!
          </Button>
        </div>
      </section>
    </>
  )
}
export default PaymentInfoComponent
