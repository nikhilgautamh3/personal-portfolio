import React from 'react'
import Cprog from '../assets/Cprog.png';
import Css from '../assets/Css.png';
import Figma from '../assets/Figma.png';
import HTML from '../assets/HTML.png';
import Illustratoradobe from '../assets/Illustratoradobe.png'
import Dev from '../assets/Dev.png';
import Npm from '../assets/Npm.png';
import Javas from '../assets/Javas.png';
import Tailwind from '../assets/Tailwind.png';
import Boot from '../assets/Boot.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen  bg-[#0e0e36] text-yellow-400 '>
    {/*Container*/}
<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
<div>
  <p className='text-4xl  font-bold inline border-b-4 border-yellow-400'>Skills</p>
  <p className='py-4 text-white text-2xl'>These are the softwares and technologies that I'm familiar with!!</p>
</div>
<div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
    <img className='w-60 mx-auto' src={HTML} alt="Html icon"/>
    <p className='my-4'>HTML</p>
  </div>


  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
    <img className='w-60 mx-auto' src={Css} alt="Css icon"/>
    <p className='my-4'>CSS</p>
  </div>


  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
    <img className='w-60 mx-auto' src={Cprog} alt="c icon"/>
    <p className='my-4'>C</p>
  </div>


  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
    <img className='w-60 mx-auto' src={Javas} alt="javas icon"/>
    <p className='my-4'>Javascript</p>
  </div>


  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
    <img className='w-60 mx-auto' src={Figma} alt="=figma icon"/>
    <p className='my-4'>Figma</p>
  </div>


  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
    <img className='w-60 mx-auto' src={Boot} alt="g icon"/>
    <p className='my-4'>Bootstrap</p>
  </div>

  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
    <img className='w-60 mx-auto' src={Dev} alt="rct icon"/>
    <p className='my-4'>React</p>
  </div>

  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
    <img className='w-60 mx-auto' src={Tailwind} alt="tail icon"/>
    <p className='my-4'>Tailwind</p>
  </div>
</div>
</div>
    </div>
  )
}

export default Skills