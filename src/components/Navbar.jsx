import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full fixed top-0 z-50 flex justify-center'>
      <div className='z-10   sm:w-4xl w-90  h-20 flex items-center justify-between p-5 rounded-full  mt-10 text-xl bg-white drop-shadow-gray-300 drop-shadow-xs'>
        <div className=' flex gap-2 items-center justify-center font-bold'> <img src="https://i.ibb.co/4ZwkxqHd/logo.png" alt="logo" className='max-w-8'/>Arivana Ai</div>
        <div className=' gap-3 hidden sm:flex md:flex'>
          <span>Why Us</span>

          <span>Features</span>

          <span>Pricing</span>

          <span>Testimonials</span>

          <span>FAQs</span>

          <span>Blog</span>

        </div>
        <button className='bg-gradient-to-b from-gray-900 to-black py-4 px-8 rounded-full text-white sm:flex hidden '>
          Try Now
        </button>
        <button className='bg-gray-200 group py-4 px-8 rounded-full border-1 border-gray-300 relative   sm:hidden flex '>
         <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Reorder_font_awesome.svg" alt="" className='w-4'/>
        
          <div className=' absolute hidden group-focus:block group-hover:block z-10 top-20 right-0 text-black rounded-lg px-10  text-sm border-1 border-gray-300 bg-white'>
            <ul className='flex flex-col items-start gap-2 mt-5 text-xl justify-baseline'>
            <li>Why Us</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Testimonials</li>
            <li>FAQs</li>
            <li>Blogs</li>
          </ul>
          </div>
        
        </button>
      </div>
      
    </div>
  )
}

export default Navbar
