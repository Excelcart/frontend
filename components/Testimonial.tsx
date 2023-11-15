import Image from 'next/image'
import React from 'react'

const Testimonial = () => {
    return (
      <div className='relative box_shadow rounded-3xl'>
        <div className='flex flex-col items-center h-auto'>
          <Image src='/t est2.jpg' width={100} height={100} alt='testimonial' className='testimonial-img' />
          <p className='md:text-2xl text-lg text-left py-20 px-4'>&quot;Excelcart Has Been A Game-changer For Me. I Found Textbooks, Gadgets, And Even Part-time Work Opportunities, All Within My Campus!&quot;</p>
          <div className='absolute top-[85%] right-10'>
            <Image src='/star.svg' width={105} height={18} alt='star'/>
          </div>
        </div>
      </div>
    )
}

export default Testimonial