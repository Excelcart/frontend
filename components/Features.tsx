import Image from 'next/image'
import React from 'react'
import FeatureCard from './FeatureCard'

const Features = () => {
  return (
    <section className='bg-image1 relative'>
      <div className='bg-image2 my-8'>
        <div className='flex flex-col items-center pt-16 xl:w-[90rem] m-auto w-[92%] relative'>
          <h2 className='text-[#00AB9B] font-bold text-2xl lg:text-[2.8125rem] mt-12 mb-20'>Why Excelcart?</h2>
          <div className='flex justify-center items-center gap-10 flex-wrap md:flex-nowrap md:w-full md:px-4'>
          <FeatureCard
              title='Find The Best Deals'
              image_url='/feature1.jpg'
              desc='Excelcart Brings Together Sellers To Offer You Unbeatable Deals On Campus Essentials.'
            />
            <FeatureCard
              title='Earn As A Courier'
              image_url='/feature2.jpg'
              desc='Be Your Boss And Earn Extra Income By Delivering Orders Right Within Your Campus.'
            />
            <FeatureCard
              title='Connect With Community'
              image_url='/feature3.jpg'
              desc="Excelcart Is Not Just A Marketplace; It&sbquo;s Your Hub For Staying Updated On Campus Life."
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features