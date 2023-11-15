import Image from 'next/image'
import React from 'react'

const GetStarted = () => {
  return (
    <section className='mt-32'>
      <div className='sec_bg relative'>
        <Image src='/people2.png' width={150} height={150} alt='community' className='absolute md:w-[10rem] w-[6rem] right-[20%] xl:right-[30%] md:top-[-12%] top-[-8%]'/>
        <div className='flex sm:flex-nowrap flex-wrap items-center pt-10 pb-4 max-w-[95rem] m-auto px-3'>
          <Image src='/view1.png' width={500} height={500} alt='excelcart view' className='w-full hidden md:block md:w-[30rem] xl:w-[45rem] xl:h-[35rem]'/>
          <div className='text-white px-2'>
            <h1 className='font-bold text-4xl xl:text-6xl pt-12 sm:pt-20 md:pt-24 text-center'>Join The Excelcart Community Today!</h1>
            <div className='flex items-center pt-8 pl-8'>
              <Image src='/line2.svg' width={20} height={20} alt='white line' className='h-[3rem]'/>
              <p className='md:text-2xl text-lg lg:text-2xl xl:text-3xl md:px-3 px-1'>Start Exploring Excelcart Now And Experience Campus Life Like Never Before.</p>
            </div>
            <div className='md:p-12 p-8'>
              <button className='bg-white text-[#00AB9B] rounded-xl font-semibold hover:bg-[#00AB9B] hover:text-white md:p-3 p-2 md:block md:text-4xl text-2xl'>Join Now!</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetStarted