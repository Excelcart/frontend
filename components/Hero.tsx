import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className='hero-bg'>
      <div>
        <Image className='lg:w-[35rem] w-[25rem] lg:h-[45rem] h-[33rem] absolute right-[0%]' src='/Ellipse85.png' width={100} height={100} alt='Ellipse1'/>
        <Image className='lg:w-[25rem] w-[20rem] lg:h-[40rem] h-[33rem] absolute right-[0%]' src='/Ellipse86.png' width={100} height={100} alt='Ellipse2' priority={true}/>
      </div>
      <div className='w-full flex px-6 lg:pt-16 relative md:justify-between justify-center flex-wrap sm:flex-nowrap xl:w-[95rem] m-auto'>
        <div className='xl:pl-10 pl-2 pt-[5rem] lg:pt-24'>
          <div className='flex'>
            <Image className='!w-1 lg:!w-1.5 xl:pt-3 pt-5' src='/line.svg' width={10} height={10} alt='line' />
            <div className='xl:pl-4 pl-2'>
              <p className='text-[#116F66] lg:text-[1.406rem]'>Welcome to Excelcart your campus market place</p>
              <h1 className='lg:text-[3rem] lg:leading-[140%] text-3xl sm:text-4xl capitalize font-bold lg:w-full'>Discover, Buy, sell, and earn within your college campus community</h1>
            </div>
          </div>
          <p className='lg:w-[34rem] text-lg lg:text-[1.17163rem] font-sans font-normal leading-7 pt-7 pl-2 xl:pl-4'>Excelcart is a unique online platform designed exclusively for college students. Whether you are looking to buy, sell, or earn income on campus, Excelcart is here to make your college life easier and more connected.</p>
          <div className='pt-10 pl-3'>
            <button className='bg-[#6ec0b8] text-white rounded-xl font-semibold hover:bg-[#00AB9B] px-5 pb-3 pt-2 text-[1.5rem] hidden sm:block'>Get Started</button>
          </div>
        </div>
        <Image src='/excelcartHero.png' width={500} height={500} alt='Buy Sell And Make Money' className='w-[39rem]'/>
        <button className='bg-[#6ec0b8] text-white rounded-xl font-semibold hover:bg-[#00AB9B] px-5 pb-3 pt-2 text-[1.5rem] block sm:hidden m-10'>Get Started</button>
      </div>
    </section>
  )
}

export default Hero