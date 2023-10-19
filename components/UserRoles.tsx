import Image from 'next/image'
import React from 'react'

const UserRoles = () => {
  return (
    <section className='w-full m-auto flex flex-col justify-center items-center px-2 xl:w-[95rem]'>
      <div className='flex flex-col justify-center items-center py-8 lg:pt-24'>
        <Image className='text-center' src='/quest1.png' width={120} height={120} alt='User Roles' />
        <h2 className='text-[#00AB9B] font-bold text-2xl md:text-4xl text-center mt-2'>What Can You Do Here?</h2>
      </div>
      <div className='px-6 lg:px-0'>
        <div className='flex items-center md:gap-10 gap-3'>
          <Image src='/role1.svg' width={150} height={150} alt='buy on excelcart' className='md:w-[10rem] w-[6rem]' />
          <p className='font-normal md:text-xl text-xs sm:text-sm mt-2 w-[60%]'>
          Browse A Wide Range Of Products Tailored To Your Campus Needs.<br/>
          Shop From Trusted Sellers Right On Your Campus.<br/>
          Enjoy Exclusive Student Discounts And Deals.
          </p>
        </div>
        <div className='flex items-center md:gap-10 gap-3 justify-end'>
          <p className='font-normal md:text-xl text-xs sm:text-sm md:py-4 py-12 text-right'>
          List Your Items Easily And Reach Out To Your Fellow Students.<br/>
          Manage Your Listings And Transactions Hassle-free.<br/>
          Turn Your Unused Items Into Cash.
          </p>
          <Image src='/role3.png' width={150} height={150} alt='buy on excelcart' className='md:w-[10rem] w-[7rem]' />
        </div>
        <div className='flex items-center md:gap-10 gap-5'>
          <Image src='/role2.svg' width={150} height={150} alt='buy on excelcart' className='md:w-[10rem] w-[7rem]' />
          <p className='font-normal md:text-xl text-xs sm:text-sm mt-2 w-[60%]'>
          Sign Up As A Courier And Earn Money On Your Own Schedule.<br/>
          Deliver Orders To Your Peers And Be A Valuable Part Of The Campus Community.<br/>
          No More Waiting For Deliveries – Make It Happen Yourself!.
          </p>
        </div>
      </div>
    </section>
  )
}

export default UserRoles