'use client'

import CustomField from '@/components/form/CustomField'
import { FieldType } from '@/components/form/index.enum'
import { Form } from '@/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const shipFormSchema = z.object({
  firstAddress: z.string().trim().min(2, {
    message: 'First Address must be at least 2 characters.'
  }),
  secondAddress: z.string().trim().min(2, {
    message: 'Second Address must be at least 2 characters.'
  }),
  province: z.string().trim().min(2, {
    message: 'Province must be at least 2 characters.'
  }),
  city: z.string().trim().min(2, {
    message: 'City must be at least 2 characters.'
  }),
  postalCode: z.string().trim().min(2, {
    message: 'Postal Code must be at least 2 characters.'
  }),
  country: z.string().trim().min(2, {
    message: 'Country must be at least 2 characters.'
  }),
  phone: z.string().trim().min(2, {
    message: 'Phone must be at least 2 characters.'
  })
})

const ShipComponent = () => {
  const form = useForm<z.infer<typeof shipFormSchema>>({
    resolver: zodResolver(shipFormSchema),
    defaultValues: {
      firstAddress: '',
      secondAddress: '',
      province: '',
      city: '',
      postalCode: '',
      country: '',
      phone: ''
    }
  })

  const onCartSubmit = async (values: z.infer<typeof shipFormSchema>) => {
    console.log(values)
  }
  return (
    <>
      <section className='w-full pt-12'>
        <h1 className='mt-8 font-bold'>Shipping Details</h1>
        <Form {...form}>
          <form
            className='mt-8 space-y-8 xl:max-w-screen-lg'
            onSubmit={form.handleSubmit(onCartSubmit)}
          >
            <div className='w-full gap-8 space-y-8 sm:flex xl:space-y-0'>
              <CustomField
                control={form.control}
                fieldName='firstAddress'
                label='First Address'
                placeholder='your first address...'
                fieldType={FieldType.INPUT}
                className='mt-8 xl:mt-0'
              />

              <CustomField
                control={form.control}
                fieldName='secondAddress'
                label='Second Address'
                placeholder='your second address...'
                fieldType={FieldType.INPUT}
              />
            </div>
            <div className='w-full gap-8 space-y-8 sm:flex xl:space-y-0'>
              <CustomField
                control={form.control}
                fieldName='province'
                label='Province'
                placeholder='your province...'
                fieldType={FieldType.INPUT}
                className='mt-8 xl:mt-0'
              />
              <CustomField
                control={form.control}
                fieldName='city'
                label='City'
                placeholder='your city...'
                fieldType={FieldType.INPUT}
              />
              <CustomField
                control={form.control}
                fieldName='postalCode'
                label='Postal Code'
                placeholder='your postal code...'
                fieldType={FieldType.INPUT}
              />
            </div>
            <div className='w-full gap-8 space-y-8 sm:flex xl:space-y-0'>
              <CustomField
                control={form.control}
                fieldName='country'
                label='Country'
                placeholder='your country...'
                fieldType={FieldType.INPUT}
                className='mt-8 xl:mt-0'
              />

              <CustomField
                control={form.control}
                fieldName='phone'
                label='Phone Number'
                placeholder='your phone number...'
                fieldType={FieldType.INPUT}
              />
            </div>
          </form>
        </Form>
      </section>
    </>
  )
}

export default ShipComponent
