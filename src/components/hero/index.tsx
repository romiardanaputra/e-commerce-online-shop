import Image from 'next/image'

const Hero = () => {
  return (
    <>
      <div className='m-6 h-64 rounded-md bg-neutral-500 md:h-72 lg:h-80 xl:h-96'>
        <Image
          src={`/images/landing/landing-hero-banner-discount.webp`}
          alt='Hero'
          width={900}
          height={256}
          priority
          quality={100}
          className='aspect-auto size-full rounded-md object-cover object-left'
        />
      </div>
    </>
  )
}

export default Hero
