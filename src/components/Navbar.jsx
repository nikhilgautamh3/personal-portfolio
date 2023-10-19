import React,{useState} from 'react';
import Logo from '../assets/Logo.png';
import {FaBars, FaTimes,FaGithub,FaLinkedin, FaFacebook} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0e0e36] text-gray-300'>
<div>
<img src={Logo} alt="Logo image" style={{width:'130px'}}/>
</div>
{/*menu */}
<div>
    <ul className='hidden md:flex'>
        <li>Home</li>
        <li>About</li>
        <li>Works</li>
        <li>Skills</li>
        <li>About</li>

    </ul>
</div>
{/* HAMBURGER MENU */}
<div onClick={handleClick} className='md:hidden z-10'>
{!nav ? <FaBars/> : <FaTimes/>}
</div>
{/*Mobile menu */}
<ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0e0e36] flex flex-col justify-center items-center'}>
        <li className='py-6 text-3xl'>Home</li>
        <li className='py-6 text-3xl'>About</li>
        <li className='py-6 text-3xl'>Works</li>
        <li className='py-6 text-3xl'>Skills</li>
        <li className='py-6 text-3xl'>About</li>  
</ul>
{/*Social Icons */}
<div className='hidden lg:flex fixed flex-col top-[35%] left-0' >
<ul>
  <li className='w-[160px] h-[60px] justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-1000'>
    <a className='flex justify-between items-center w-full text-gray-300' href="/">
      Linkedin <FaLinkedin size={30}/>
    </a>
  </li>
  <li className='w-[160px] h-[60px] justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-1000'>
    <a className='flex justify-between items-center w-full text-gray-300' href="/">
      GitHub <FaGithub size={30}/>
    </a>
  </li>
  <li className='w-[160px] h-[60px] justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-1000'>
    <a className='flex justify-between items-center w-full text-gray-300' href="/">
      Email <HiOutlineMail size={30}/>
    </a>
  </li>
  <li className='w-[160px] h-[60px] justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-1000'>
    <a className='flex justify-between items-center w-full text-gray-300' href="/">
      Resume <BsFillPersonLinesFill size={30}/>
    </a>
  </li>
</ul>

</div>
    </div>
  )
}

export default Navbar