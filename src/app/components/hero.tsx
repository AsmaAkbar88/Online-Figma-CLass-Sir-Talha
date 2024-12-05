import React from 'react'
import Image from 'next/image'

const hero = () => {
  return (
    <section className='w-full h-screen  flex items-center flex-col mt-[150px] px-24 gap-20'>
      <div className='flex items-center justify-between w-full'>
        {/* main div  */}
        <div className=' flex flex-col items-start gap-7'>

          {/* left sec  */}
          <h1 className='text-5xl font-extrabold text-blue-700 hover:text-white'>HI, Asma Here ❤</h1>
          <p className='text-[#9C9C9C] text-sm max-w-prose'>Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          <button className='bg-primary flex items-center justify-center gap-4 font-bold text-white px-8 py-4 rounded-lg border border-green-600'> Let’s get started › </button>
        </div>
        <div>
          {/* right sec  */}
          <Image src={'/ph.jpg'} alt={'Photo'} width={350} height={350} className='rounded-full'></Image>
        </div>
      </div>
      {/* logo div  */}
      <div className='flex items-center justify-center gap-8'>
        <Image src={'/Logo1.png'} alt={"logo"} width={160} height={60}></Image>
        <Image src={'/Logo2.png'} alt={"logo"} width={160} height={60}></Image>
        <Image src={'/Logo3.png'} alt={"logo"} width={160} height={60}></Image>
        <Image src={'/Logo4.png'} alt={"logo"} width={160} height={60}></Image>
        <Image src={'/Logo5.png'} alt={"logo"} width={160} height={60}></Image>
      </div>
    </section>
  )
}

export default hero
