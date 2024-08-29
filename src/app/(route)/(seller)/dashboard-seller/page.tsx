import SidebarNavigation from './_components/SidebarNav'
import BreadcrumbDashboardSeller from './_components/Breadcrumb'
import DashBoardCard from './_components/Card'
import Invoice from './_components/Invoice'
import SearchBarSeller from './_components/SearchBar'
import ProfileDropdown from './_components/Profile'
import Order from './_components/Order'
import SideNavMobile from './_components/SidenavMobile'

export default function DashboardSellerPage() {
  return (
    <div className='bg-muted/40 flex min-h-screen w-full flex-col'>
      <SidebarNavigation />
      <div className='flex flex-col sm:gap-4 sm:py-4 sm:pl-14'>
        <header className='bg-background sticky top-0 z-30 flex h-14 items-center gap-4 border-b px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6'>
          <SideNavMobile />
          <BreadcrumbDashboardSeller />
          <SearchBarSeller />
          <ProfileDropdown />
        </header>
        <main className='grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3'>
          <div className='grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2'>
            <DashBoardCard />
            <Order />
          </div>
          <div>
            <Invoice />
          </div>
        </main>
      </div>
    </div>
  )
}
