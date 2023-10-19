import Image from 'next/image'
import React from 'react'

interface Props {
  title: string,
  image_url: string,
  desc: string
}

const FeatureCard = ({...props}: Props) => {
  return (
    <div className='bg-[#00AB9B] flex flex-col items-center gap-5 p-4 text-white rounded-3xl box_shadow'>
        <h3 className='font-semibold md:text-xl text-3xl'>{props.title}</h3>
        <Image src={props.image_url} width={300} height={300} alt='Find the best deals at Excelcart' className='w-full xl:px-5 px-3 rounded-[3rem]'/>
        <p className='text-center text-xl md:text-sm xl:font-medium font-normal font-sans w-[90%] lg:w-full'>
          {props.desc}
        </p>
      </div>
  )
}

export default FeatureCard