import { Button } from '@/components/ui/button'
import Image from 'next/image'

const SignUpSuccess = () => {
  return (
    <>
      <div className='container relative min-h-screen max-w-screen-sm'>
        <div className='absolute left-1/2 top-1/2 flex w-4/5 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-4 sm:w-fit'>
          <Image
            src='/images/register/register-success-icon.webp'
            alt='register icon success'
            width={150}
            height={150}
            className='aspect-square object-cover object-center'
          />
          <section className='mb-8 space-y-4 text-center'>
            <h4 className='text-3xl font-medium'>Welcome to store</h4>
            <p>
              You have successfully registered with us. Let&apos;s grow up now
            </p>
          </section>

          <div className='flex flex-col gap-4'>
            <Button size={'lg'}>My Dashboard</Button>
            <Button size={'lg'} variant={'outline'}>
              Go to shopping
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUpSuccess
