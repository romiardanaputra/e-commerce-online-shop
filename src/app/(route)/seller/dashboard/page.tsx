import DashBoardCard from './_components/card'
import Invoice from './_components/invoice'
import Order from './_components/order'

const DashboardSellerPage = () => {
  return (
    <main className='grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3'>
      <div className='grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2'>
        <DashBoardCard />
        <Order />
      </div>
      <div>
        <Invoice />
      </div>
    </main>
  )
}

export default DashboardSellerPage
