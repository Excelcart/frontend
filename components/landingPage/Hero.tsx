'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Button from '../innerComponent/button'

const Hero = () => {
  return (
    <>
      <section className='hero-bg'>
        <div className='max-w-[95rem] m-auto flex px-3 lg:pt-8 relative lg:justify-between justify-center flex-wrap lg:flex-nowrap'>
          <div className='px-1 pt-16 lg:pt-24 lg:w-1/2'>
            <div className='flex'>
              <Image className='!w-[0.2rem] lg:!w-1.5 xl:pt-3 pt-5' src='/line.svg' width={8} height={5} alt='line' />
              <div className='xl:pl-4 pl-2'>
                <p className='text-[#116F66] lg:text-xl text-sm'>Welcome to Excelcart your campus market place</p>
                <h1 className='lg:text-4xl xl:text-5xl lg:leading-[140%] xl:leading-[140%] text-2xl sm:text-3xl capitalize font-bold lg:w-full'>Discover, Buy, sell and earn within your college campus community</h1>
              </div>
            </div>
            <p className='text-sm lg:text-lg leading-6 pt-5 pl-2 xl:pl-4'>
              Excelcart is a unique online platform designed exclusively for college students. Whether you are looking to buy, sell, or earn income on campus, Excelcart is here to make your college life easier and more connected.
            </p>
            <div className='pt-10 pl-3'>
              <a href="/register">
                <Button class={'rounded-xl hidden lg:block'} title={"Get Started"}/>
              </a>
              {/* <button className='bg-[#6ec0b8] text-white rounded-xl font-semibold hover:bg-[#00AB9B] px-5 pb-3 pt-2 text-[1.5rem] hidden lg:block'>Get Started</button> */}
            </div>
          </div>
          <Image src='/excelcartHero.png' width={500} height={500} alt='Buy Sell And Make Money' className='lg:w-1/2 lg:h-[32rem] xl:h-[40rem] p-3 lg:pt-12 w-full'/>
          <a href="/register">
            <Button class={'rounded-xl lg:hidden'} title={"Get Started"}/>
          </a>
          {/* <button className='bg-[#6ec0b8] text-white rounded-xl font-semibold hover:bg-[#00AB9B] px-3 pb-2 pt-2 text-[1.2rem] block lg:hidden m-10'>Get Started</button> */}
        </div>
      </section>
    </>
  )
}

export default Hero