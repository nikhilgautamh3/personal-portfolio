import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0e0e36] text-yellow-400'>
    <div className='flex flex-col justify-center items-center w-full h-full'>
         <div className='max-w-[1000px] w-full  grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-yellow-400'>About</p>
            </div>
            <div>

            </div>
            </div>
            <div className='max-w-[1000px] w-full  grid sm:grid-cols-2 gap-8 px-8'>
            <div className='sm:text-right text-4xl font-bold text-white'><p>Hello!! I'm Nikhil, Its a pleasure to see you. Have a look around</p></div>
            <div className='text-yellow-400 text-2xl '><p>
                Choosed Jorhat Engineering College,Assam as my College for B.Tech. The initial 2.5 years of B.Tech 
                was Graphics oriented. I had been learning Graphics designing softwares and even worked in some startups 
                as their Graphics Designer. I caught up Web Development in my mid 3rd Year and at present i am trying to
                boost up my Front-End Development and jump to Backend too.
</p>
            </div>

            </div>
        
    </div>

    </div>
  )
}

export default About