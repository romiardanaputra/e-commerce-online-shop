'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Form } from '@/components/ui/form'
import CustomField from '@/components/form/CustomField'
import { FieldType } from '@/components/form/index.enum'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { loginFormSchema } from '@/lib/validation/loginValidation'

const LoginForm = () => {
  const onLoginSubmit = async (values: z.infer<typeof loginFormSchema>) => {
    console.log(values)
  }

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  return (
    <>
      <Form {...form}>
        <form
          className='container max-w-screen-sm space-y-8 pt-12 xl:pt-20'
          onSubmit={form.handleSubmit(onLoginSubmit)}
        >
          <h1 className='text-3xl font-medium'>
            Belanja kebutuhan utama, menjadi makin mudah
          </h1>
          <CustomField
            control={form.control}
            fieldName='email'
            label='Email Address'
            description='ex: romiardana21@gmail.com'
            placeholder='email'
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

          <div className='flex flex-col gap-4'>
            <Button type='submit' size={'lg'}>
              Sign in to my account
            </Button>
            <Link href='/sign-up'>
              <Button
                type='submit'
                variant={'outline'}
                size={'lg'}
                className='w-full'
              >
                Sign Up
              </Button>
            </Link>
          </div>
        </form>
      </Form>
    </>
  )
}

export default LoginForm
