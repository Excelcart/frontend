import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black'>
      <div className='m-auto w-full text-white max-w-[95rem] m-auto'>
        <div className='flex justify-between gap-10 md:p-20 p-10'>
          <ul className='flex lg:flex-row flex-col lg:gap-10 gap-5 lg:text-xl text-lg'>
            <li>Products</li>
            <li>About</li>
            <li>Support</li>
          </ul>
          <ul className='flex lg:flex-row flex-col lg:gap-10 gap-5 lg:text-xl text-lg'>
            <li>Contact Us</li>
            <li>Privacy & Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <hr className='w-[90%] m-auto'/>
        <ul className='flex items-center justify-center md:gap-10 gap-2 py-5'>
          <li>
            <Image src='/linkedin.svg' width={40} height={40} alt='linkedin' className='w-8'/>
          </li>
          <li>
            <Image src='/twitter.svg' width={40} height={40} alt='twitter' className='w-8'/>
          </li>
          <li>
            <Image src='/instagram.svg' width={40} height={40} alt='instagram' className='w-8'/>
          </li>
          <li>
            <Image src='/instagram.svg' width={40} height={40} alt='instagram' className='w-8'/>
          </li>
        </ul>
        <p className='py-10 text-center text-sm md:text-xl'>© 2023 Excelcart. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer