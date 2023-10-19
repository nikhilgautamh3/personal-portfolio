import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className=' w-full h-screen bg-[#0e0e36]'>
        {/*Container*/}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-yellow-300'>Hello!! My Name is</p>
        <h1 className='text-6xl sm:text-8xl font-bold text-[#ccd6f6]'>Nikhil Gautam</h1>
        <h2 className='text-6xl sm:text-8xl font-bold text-[#FDE047]'>A CSE Undergrad</h2>
        <p className='text-[#ccd6f6] p-2 max-w-[700px]'>I have just started the journey of Front-End Developer and is specialized
        in building and developing eye-catching front-end designs.
        I am an experienced Graphics Designer too.</p>
        <h2 className='text-2xl sm:text-3xl font-bold text-[#FDE047]'>Welcome To My Portfolio Website</h2>
        <div>
            <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-400 hover:border-yellow-400'>See My Work
            <span className='hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3'/>
            </span></button>
        </div>

        </div>
    </div>
  )
}

export default Home