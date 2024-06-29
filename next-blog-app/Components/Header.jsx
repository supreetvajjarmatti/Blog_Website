import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='py-5 px-5 md:px-12 lg-px-28'>
        <div className='flex justify-between items-center'>
            <Image src={assets.logo}  width={180} alt="logo" className='w-[130px] sm:w-auto' />
            <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]'>Get Started <Image src={assets.arrow}></Image> </button>
        </div>
      <div className='text-center my-8'>
        <h1 className='text-3xl sm-text-5xl font-medium'>Latest Blogs</h1>
        <p className='mt-10 max-w-[740px] m-auto text-xs sm-text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus dolorem consectetur inventore in minima, unde maxime nihil ipsum facere rerum ea suscipit ipsam cum nesciunt corporis, voluptatibus aspernatur praesentium possimus.</p>
        <form className='flex justify-between max-w-[500px] scale-75 sm:scale-100' action=""></form>

      </div>
    </div>
  )
}

export default Header
