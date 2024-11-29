import React from 'react'

const Home = () => {
  return (
    <>

      <div id='home' className='  flex justify-center items-center'>
        <div className='w-[600px] flex flex-col justify-center items-center h-[500px] my-4 '>
          <img className='h-[150px] my-4 border-[2px] rounded-full border-pink-700 ' src='https://avatar.iran.liara.run/public/62 ' />
          <h1 className=' font-bold text-4xl text-center  text-orange-400 animte-shine'> I'M AIMAN SABOOH </h1>
          <h1 className='font-bold text-4xl text-center text-pink-600 animate-shine bg-clip-text'> Frontend developer based in USA</h1>
          <p className='text-center my-1 text-white'>I am a frontend dveloper from California,USA with 10 years of experience in multiple companies like Microsoft Excel and Apple.</p>
          <div className='flex gap-2 my-2'>
            <button  className='btn bg-gradient-to-r from-pink-400 to-orange-300 rounded-full text-white hover:from-orange-300 hover:to-pink-400 hover:scale-105'> Contact Me</button>
            <button className='btn bg-gradient-to-r from-pink-400 to-orange-300 rounded-full text-white  hover:from-orange-300 hover:to-pink-400 hover:scale-105'> My Resume</button>
          </div>
        </div>
      </div>
    </>

  )
}

export default Home
