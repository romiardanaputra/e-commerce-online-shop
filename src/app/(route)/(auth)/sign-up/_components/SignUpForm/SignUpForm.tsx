'use client'

import { useForm } from 'react-hook-form'
import Link from 'next/link'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import CustomField from '@/components/form/CustomField'
import { FieldType } from '@/components/form/index.enum'
import { registerFormSchema } from '@/lib/validation/registerValidation'

const SignUpForm = () => {
  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      storeOpen: false,
      shopName: '',
      shopCategory: ''
    }
  })

  const onSubmit = async (values: z.infer<typeof registerFormSchema>) => {
    console.log(values)
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='container max-w-screen-sm space-y-8 pt-12 xl:pt-20'
      >
        <h1 className='mb-5 text-3xl font-medium'>Start To Buy With New Way</h1>
        <CustomField
          control={form.control}
          fieldName='fullName'
          label='Fullname'
          description='ex fullname: Kadek Romi Ardana Putra'
          placeholder='fullname...'
          fieldType={FieldType.INPUT}
        />

        <CustomField
          control={form.control}
          fieldName='email'
          label='Email Address'
          description='ex: romiardana@gmail.com'
          placeholder='email...'
          fieldType={FieldType.INPUT}
        />

        <CustomField
          control={form.control}
          fieldName='password'
          label='Password'
          description='we suggest that the password contains capital letter, number, symbols'
          placeholder='password...'
          fieldType={FieldType.INPUT}
        />
        <CustomField
          control={form.control}
          fieldType={FieldType.RADIO}
          fieldName='storeOpen'
          label='Store'
          description='want to open store?'
          placeholder=''
        />

        <CustomField
          control={form.control}
          fieldName='shopName'
          label='Shop Name'
          description='your shopname will be displayed on your store'
          placeholder='shopname...'
          fieldType={FieldType.INPUT}
        />

        <CustomField
          control={form.control}
          fieldName='shopCategory'
          label='Category'
          description='Choose you shop category'
          placeholder='shop category...'
          fieldType={FieldType.SELECT}
        />
        <div className='flex flex-col gap-4'>
          <Button type='submit' size={'lg'}>
            Submit
          </Button>
          <Link href='/login'>
            <Button
              type='submit'
              variant={'outline'}
              size={'lg'}
              className='w-full'
            >
              Back to Sign In
            </Button>
          </Link>
        </div>
      </form>
    </Form>
  )
}
export default SignUpForm
