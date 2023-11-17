"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

import Button from './innerComponent/button'
import Overlay from './innerComponent/Overlay'

const Header = () => {
  const [Open, setOpen] = useState(false);
  const toggleMenu = () =>{
    setOpen(!Open)
  }
  const visible = Open ? '':'hidden';
  const hamburger = Open ? '/xsvg.svg':'/hamburger-menu.svg';
  return (
    <> 
      {Open ? <div className={`overlay ${visible} z-10`} onClick={toggleMenu}> </div> : ''}
      <header className='bg-white sticky top-0 z-20'>
        <nav className='flex justify-between items-center p-3 md:px-10 max-w-[95rem] m-auto xl:px-16 xl:py-3 relative'>
          <Link href='/'>
            <Image src='/logo.png' width={120} height={120} alt='Excelcart logo'/>
          </Link>
          <div className={`${visible} text-white md:text-black md:block md:static absolute min-h-screen left-0 top-[100%] md:top-0 md:p-0 md:bg-transparent bg-[#00AB9B] p-16 rounded-r-xl md:min-h-fit`}>
            <ul className={`md:flex gap-[4vw] items-center`}>
              <li className='py-5'>
                <Link className='hover:text-gray-500 font-bold ' href='/'>Home</Link>
              </li>
              <li className='py-5'>
                <Link className='hover:text-gray-500 font-bold' href='/'>Buyer</Link>
              </li>
              <li className='py-5'>
                <Link className='hover:text-gray-500 font-bold' href='/'>Seller</Link>
              </li>
              <li className='py-5'>
                <Link className='hover:text-gray-500 font-bold' href='/'>Contact</Link>
              </li>
            </ul>
          </div>
          <Image src={hamburger} className={`block md:hidden ${Open ? 'w-4':'w-6'}`} width={20} height={20} alt='hamburger' onClick={toggleMenu} />
          <a href="/register">
            <Button class={'rounded-full hidden md:block'} title={"Get Started"}/>
          </a>
        </nav>
      </header>
    </>
  )
}

export default Header