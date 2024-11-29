import React from 'react'
const cards = [
    {
        num : '01',
        title : "Web development"
    },
    {
        num : '02',
        title : 'Graphic Design'
    },
    {
        num : '03',
        title : 'Social Media'
    },
    {
        num : '04',
        title : 'App Design'
    },
    {
        num : '05',
        title : 'Digital Marketing'
    },
    {
        num : '06',
        title : 'Content Writing'
    },
]
const Service = () => {
  return (
    <>
      <div id='service'>
      <marquee className="text-6xl font-bold shadow-lg shadow-pink-600 mx-48 text-center text-white my-8">My Services!</marquee>
      <div className='flex flex-wrap gap-4 max-w-[60vw] mx-auto'>
        {cards.map((card,index)=>(
        <div key={index} className='h-52 w-52  flex flex-col gap-3 border-[2px] key={card.num} hover:border-pink-800 hover:scale-100  border-white hover:bg-gradient-to-r hover:from-pink-400 hover:to-orange-300 rounded-md'>
         <h2 className='font-bold text-2xl text-white mx-2' >{card.num}</h2>
         <h1 className='text-2xl  text-center font-bold text-pink-600 '>{card.title}</h1>
         <p className='text-white text-center'>{card.title} is the process of building,programming...</p>
        </div>
 ))}

      </div>
      </div>
    </>
  )
}

export default Service
