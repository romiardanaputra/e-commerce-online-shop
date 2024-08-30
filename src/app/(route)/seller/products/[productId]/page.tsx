'use client'

import { Form } from '@/components/ui/form'
import React from 'react'
import { updateProductSchema } from '../[productId]/validation/index'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import CustomField from '@/components/form/CustomField'
import { FieldType } from '@/components/form/index.enum'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const ProductIdPage = () => {
  const form = useForm<z.infer<typeof updateProductSchema>>({
    resolver: zodResolver(updateProductSchema),
    defaultValues: {
      productName: '',
      productPrice: '',
      productDescription: '',
      productCategory: ''
    }
  })

  const onUpdateSubmit = (values: z.infer<typeof updateProductSchema>) => {
    console.log(values)
  }

  return (
    <main className='p-4 sm:px-6 sm:py-0'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onUpdateSubmit)}
          className='container max-w-screen-sm space-y-8 pt-12 xl:pt-20'
        >
          <h1 className='mb-5 text-3xl font-medium'>Update Product Name</h1>
          <CustomField
            control={form.control}
            fieldName='productName'
            label='Product Name'
            description='ex: Jam Tangan Batman'
            placeholder='product name...'
            fieldType={FieldType.INPUT}
          />

          <CustomField
            control={form.control}
            fieldName='productPrice'
            label='Product Price'
            description='ex: format in dollar'
            placeholder='product price...'
            fieldType={FieldType.INPUT}
          />

          <CustomField
            control={form.control}
            fieldName='productCategory'
            label='Product Category'
            description='Choose your product category'
            placeholder='product category...'
            fieldType={FieldType.SELECT}
          />
          <CustomField
            control={form.control}
            fieldName='productDescription'
            label='Product Description'
            description='ex: description of your product'
            placeholder='product description...'
            fieldType={FieldType.TEXTAREA}
          />

          <div className='flex flex-col gap-4'>
            <Button type='submit' size={'lg'}>
              Update Product
            </Button>
            <Link href='/seller/products'>
              <Button
                type='submit'
                variant={'outline'}
                size={'lg'}
                className='w-full'
              >
                Back
              </Button>
            </Link>
          </div>
        </form>
      </Form>
    </main>
  )
}

export default ProductIdPage
