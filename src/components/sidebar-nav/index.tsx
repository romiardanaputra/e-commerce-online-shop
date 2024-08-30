import React from 'react'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
import Link from 'next/link'
import { Settings } from 'lucide-react'
import { SideBarNavLinks } from './index.data'

const SidebarNavigation = () => {
  return (
    <>
      <aside className='bg-background fixed inset-y-0 left-0 z-50 hidden w-14 flex-col border-r sm:flex'>
        <nav className='flex flex-col items-center gap-4 px-2 sm:py-5'>
          {SideBarNavLinks.map(link => (
            <TooltipProvider key={link.id}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={link.link}
                    className='text-muted-foreground hover:text-foreground flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8'
                  >
                    {link.icon}
                    <span className='sr-only'>{link.name}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side='right'>{link.name}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </nav>
        <nav className='mt-auto flex flex-col items-center gap-4 px-2 sm:py-5'>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href='#'
                  className='text-muted-foreground hover:text-foreground flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8'
                >
                  <Settings className='h-5 w-5' />
                  <span className='sr-only'>Settings</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side='right'>Settings</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>
    </>
  )
}

export default SidebarNavigation
