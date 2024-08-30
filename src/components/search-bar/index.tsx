import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'

const SearchBarSeller = () => {
  return (
    <>
      <div className='relative ml-auto flex-1 md:grow-0'>
        <Search className='text-muted-foreground absolute left-2.5 top-2.5 h-4 w-4' />
        <Input
          type='search'
          placeholder='Search...'
          className='bg-background w-full rounded-lg pl-8 md:w-[200px] lg:w-[336px]'
        />
      </div>
    </>
  )
}

export default SearchBarSeller
