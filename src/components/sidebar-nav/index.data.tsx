import { Home, Package } from 'lucide-react'

export const SideBarNavLinks = [
  {
    id: 1,
    link: '/seller/dashboard',
    name: 'Dashboard',
    icon: <Home className='h-5 w-5' />
  },
  {
    id: 2,
    link: '/seller/products',
    name: 'Products',
    icon: <Package className='h-5 w-5' />
  },
  {
    id: 3,
    link: '/seller/transactions',
    name: 'Orders',
    icon: <Package className='h-5 w-5' />
  }
]
