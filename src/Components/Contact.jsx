import React from 'react'
import { TfiEmail } from "react-icons/tfi";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <>
     <div id='contact'>
      <marquee className=" shadow-lg shadow-pink-600 text-6xl mx-48 font-bold text-center text-white my-10">Get in Touch!</marquee>
      <div className='flex justify-between max-w-[80vw] mx-auto'>
        <div className='flex flex-col gap-2'>
          <h1 className="text-4xl font-bold text-center text-pink-700">Lets Talk!</h1>
          <p className='text-white'>I am available all the time. Feel free to contact at any time!</p>
          <div className='flex gap-2'>
            <TfiEmail style={{ color: 'white', marginTop: '4px' }} />

            <p className='text-white'>AimenSabooh.png@gmail.com</p>
          </div>
          <div className='flex gap-2'>
            <FaPhoneVolume style={{ color: 'white', marginTop: '6px' }} />

            <p className='text-white my-1'>+92-307-459-806</p>
          </div>
          <div className='flex gap-2'>
            <IoLocationOutline style={{ color: 'white', marginTop: '4px' }} />
            <p className='text-white'>UA,United States</p>
          </div>
        </div>
        <div className='flex flex-col gap-2 '>
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered input-error w-full max-w-xs bg-black text-white" />
          <input
            type="text"
            placeholder="Your Email"
            className="input input-bordered input-error w-full max-w-xs  bg-black text-white" />
          <textarea className="textarea textarea-error  bg-black text-white" placeholder="Your Message"></textarea>
          <a className="btn mb-5 bg-gradient-to-r from-pink-400 to-orange-300 rounded-md text-white  hover:from-orange-300 hover:to-pink-400 hover:scale-105">Contact Me</a>
        </div>
      </div>
    </div>
    <div className='h-10 mx-2 w-full text-white text-2xl font-bold'> Aiman Sabooh </div>
            </> 

  )
}

export default Contact
