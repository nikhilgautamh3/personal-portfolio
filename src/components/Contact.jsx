import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen  bg-[#0e0e36] flex justify-center items-center p-4'>
    <form method='POST' action="https://getform.io/f/0271bb2c-4a80-4dd8-8f66-f12f6e01ec4a" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
            <p className='text-4xl text-yellow-400 font-bold inline border-b-4 border-yellow-400'>Contact</p>
            <p className='text-white text-2xl py-4'>Please submit the Form below or Send me an Email at gautamnikhil309@gmail.com</p>
        </div>
        <input className='bg-[#1d1f56] p-2' type="text" placeholder='Name' name='name'/>
        <input className='my-4 p-2 bg-[#1d1f56]' type="email"  placeholder='Email' name='email'/>
        <textarea className='bg-[#1d1f56] p-2' name='message' placeholder='Message'  rows="10"></textarea>
        <button className='text-white border-2 hover:bg-yellow-400 hover:border-yellow-400 px-4 py-3 text-2xl my-8 mx-auto flex items-center'>Let's Get-In-Touch</button>
    </form>

    </div>
  )
}

export default Contact