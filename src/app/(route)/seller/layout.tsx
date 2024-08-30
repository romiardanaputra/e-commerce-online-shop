import SidebarNavigation from '@/components/sidebar-nav'
import SideNavMobile from '@/components/sidebar-nav-mobile'
import BreadcrumbDashboardSeller from './dashboard/_components/breadcrumb'
import SearchBarSeller from '@/components/search-bar'
import ProfileDropdown from '@/components/profile'

const SellerLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className='bg-muted/40 flex min-h-screen w-full flex-col'>
        <SidebarNavigation />
        <div className='flex flex-col sm:gap-4 sm:py-4 sm:pl-14'>
          <header className='sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-white px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6'>
            <SideNavMobile />
            <BreadcrumbDashboardSeller />
            <SearchBarSeller />
            <ProfileDropdown />
          </header>
          {children}
        </div>
      </div>
    </>
  )
}

export default SellerLayout
