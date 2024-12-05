import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const navbar = () => {
  return (
    <nav className='text-white bg-[#1B1B1B] 
     px-12 py-5 gap-10 flex justify-between items-center'>
      <div className='flex  flex-1 items-center justify-between'>
        <Link href={'#'} className='text-[#9C9C9C] text-sm font-normal hover:text-white'>Home</Link>
        <Link href={'#'} className='text-[#9C9C9C] text-sm font-normal  hover:text-white'>Case Studies</Link>
        <Link href={'#'} className='text-[#9C9C9C] text-sm font-normal  hover:text-white'>About</Link>
        <Link href={'#'} className='text-[#9C9C9C] text-sm font-normal  hover:text-white'>Get in Touch</Link>
      </div>
      <div className='flex gap-3 items-center justify-center'>
        <Image src={'/Behance.png'} alt={'Behance Photo'} width={18} height={20}></Image>
        <Image src={'/LinkedIn.png'} alt={'Linkedin Photo'} width={18} height={20}></Image>
        <Image src={'/Twitter.png'} alt={'Twitter Photo'} width={18} height={20}></Image>
      </div>
    </nav>
  )
}

export default navbar
