import Image from 'next/image'
import React from 'react'

const GetStarted = () => {
  return (
    <section className='mt-32'>
      <div className='sec_bg relative'>
        <Image src='/people2.png' width={150} height={150} alt='community' className='absolute md:w-[12rem] w-[8rem] right-[20%] md:top-[-12%] top-[-8%]'/>
        <div className='flex sm:flex-nowrap flex-wrap items-center pt-10 pb-4 '>
          <Image src='/view.png' width={500} height={500} alt='excelcart view' className='w-[30rem] sm:w-[20rem] md:w-[30rem] lg:w-[45rem] lg:h-[40rem]'/>
          <div className='text-white px-4'>
            <h1 className='font-bold text-4xl md:text-5xl lg:text-[3.75rem] pt-12 sm:pt-20 md:pt-24 text-center '>Join The Excelcart Community Today!</h1>
            <div className='flex items-center pt-8 pl-8'>
              <Image src='/line2.svg' width={20} height={20} alt='white line' className='h-[3rem]'/>
              <p className='md:text-3xl text-xl md:px-3 px-1'>Start Exploring Excelcart Now And Experience Campus Life Like Never Before.</p>
            </div>
            <div className='md:p-12 p-8'>
              <button className='bg-white text-[#00AB9B] rounded-xl font-semibold hover:bg-[#00AB9B] hover:text-white md:p-4 p-2.5 md:block md:text-4xl text-2xl'>Join Now!</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetStarted