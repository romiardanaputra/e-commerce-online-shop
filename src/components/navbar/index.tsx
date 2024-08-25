'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { IconMenu2 } from '@tabler/icons-react'
import { Button } from '../ui/button'

const Navbar = () => {
  const pathname = usePathname()
  return (
    <>
      <Sheet>
        <div className='flex w-full items-center justify-between p-6'>
          <SheetTrigger className='flex items-center gap-2'>
            <div className='xl:hidden'>
              <IconMenu2 />
              <span className='sr-only'>Open menu</span>
            </div>

            <div>
              <SheetTitle>Logo</SheetTitle>
            </div>
          </SheetTrigger>
          <div className='xl:flex xl:items-center xl:gap-6'>
            <ul className='hidden w-full gap-6 xl:flex'>
              <li>
                <Link href='/'>Home</Link>
              </li>
              <li>
                <Link href='/'>Categories</Link>
              </li>
              <li>
                <Link href='/'>Reward</Link>
              </li>

              {pathname !== '/sign-up' && pathname !== '/login' && (
                <li>
                  <Link href='/sign-up'>Sign Up</Link>
                </li>
              )}
            </ul>
            {pathname !== '/sign-up' && pathname !== '/login' && (
              <Link href='/login'>
                <Button>Login</Button>
              </Link>
            )}
          </div>
        </div>

        <SheetContent side={'left'}>
          <SheetHeader>
            <SheetTitle className='py-4 text-left'>Menu</SheetTitle>
            <ul className='flex w-full flex-col gap-6'>
              <li>
                <Link href='/'>Home</Link>
              </li>
              <li>
                <Link href='/'>Categories</Link>
              </li>
              <li>
                <Link href='/'>Reward</Link>
              </li>
              <li>
                <Link href='/sign-up'>Sign Up</Link>
              </li>
            </ul>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  )
}

export default Navbar
