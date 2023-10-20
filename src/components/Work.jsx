import React from 'react'
import One from '../assets/One.png';
import Jec from '../assets/Jec.png';
import Portfolio from '../assets/Portfolio.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-yellow-400 bg-[#0e0e36]'>
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-yellow-400 '>Works/Experience</p>
            <p className='py-4 text-2xl text-white'>These are some of my Experience and Works in the recent Days</p>
        </div>
        {/*Container */}
        <div
         
        className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {/*Grid Item */}

            <div style={{backgroundImage: `url(${One})`}} className='shadow-lg shadow-[#040c16] group container rounder-md flex justify-center items-center mx-auto content-div'>

            {/*Hover Effects*/}
                <div className='opacity-0 group-hover:opacity-100'>
                 <span className='text-2xl font-bold text-white tracking-wider'>
                 Online Assessment Portal

                 </span>
                    <div className='pt-8 text-center'>
                    <a href="https://assessify360.vercel.app">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg '>Demo</button>
                    </a>
                    <a href="git@github.com:nikhilgautamh3/assessify360.git">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg '>Code</button>
                    </a>

                    </div>
                </div>
            </div>
            <div style={{backgroundImage: `url(${Portfolio})`}} className='shadow-lg shadow-[#040c16] group container rounder-md flex justify-center items-center mx-auto content-div'>

{/*Hover Effects*/}
    <div className='opacity-0 group-hover:opacity-100'>
     <span className='text-2xl font-bold text-white tracking-wider'>
    Portfolio Website

     </span>
        <div className='pt-8 text-center'>
        <a href="http://personal-portfolio-roan-five.vercel.app">
            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg '>Demo</button>
        </a>
        <a href="/">
            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg '>Code</button>
        </a>

        </div>
    </div>
</div>
            <div style={{backgroundImage: `url(${Jec})`}} className='shadow-lg shadow-[#040c16] group container rounder-md flex justify-center items-center mx-auto content-div'>

{/*Hover Effects*/}
    <div className='opacity-0 group-hover:opacity-100'>
     <span className='text-2xl font-bold text-white tracking-wider'>
     Management Website

     </span>
        <div className='pt-8 text-center'>
        <a href="/">
            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg '>Demo</button>
        </a>
        <a href="/">
            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg '>Code</button>
        </a>

        </div>
    </div>
</div>
        </div>
    </div>

    </div>
  )
}

export default Work