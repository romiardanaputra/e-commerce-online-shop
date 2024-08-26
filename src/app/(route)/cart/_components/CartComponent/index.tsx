import BreadcrumbComponent from '@/components/breadcrumb'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { CartTableComponent } from '../CartTableComponent'
import ShipComponent from '../ShipComponent'
import PaymentInfoComponent from '../PaymentInfo'

const CartComponent = () => {
  return (
    <>
      <div className='container'>
        <BreadcrumbComponent />
        <CartTableComponent />
        <ShipComponent />
        <PaymentInfoComponent />
      </div>
    </>
  )
}
export default CartComponent
