import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className=' w-full h-screen bg-[#0e0e36]'>
        {/*Container*/}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-yellow-300 text-2xl'>Hello!! My Name is</p>
        <h1 className='text-6xl sm:text-8xl font-bold text-[#ccd6f6] '>Nikhil Gautam</h1>
        <h2 className='text-6xl sm:text-10xl font-bold text-[#FDE047] my-4'>A CSE Undergrad</h2>
        <p className='text-[#ccd6f6] p-2 max-w-[700px] text-2xl font-thin my-4'>I have just started the journey of Front-End Developer and is specialized
        in building and developing eye-catching front-end designs.
        I am an experienced Graphics Designer too.</p>
        <h2 className='text-2xl sm:text-3xl font-bold text-[#FDE047] my-4'>Welcome To My Portfolio Website</h2>
        <div>
            <button className='text-white border-2 px-6 py-3 my-10 flex items-center hover:bg-yellow-400 hover:border-yellow-400'>See My Work
            <span className='hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3'/>
            </span></button>
        </div>

        </div>
    </div>
  )
}

export default Home