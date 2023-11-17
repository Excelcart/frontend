import Image from 'next/image'
import React from 'react'
import Testimonial from './Testimonial'

const Testimonials = () => {
  return (
    <section className='max-w-[95rem] m-auto md:my-32 my-28 flex flex-col items-center px-10'>
      <h2 className='font-bold md:text-4xl text-xl sm:text-2xl md:mt-2 capitalize'>what are students saying?</h2>
      <div className='md:mt-36 mt-28 flex sm:flex-nowrap flex-wrap justify-between gap-y-28 sm:gap-7'>
        <Testimonial/>
        <Testimonial/>
        <Testimonial/>
      </div>
      <div className='pt-16'>
      <Image src='/slide.svg' width={105} height={18} alt='star'/>
      </div>
    </section>
  )
}

export default Testimonials