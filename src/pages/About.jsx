import React from 'react'
import { assets2 } from '../assets/assets_frontend/assets'

const about = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>About <span className='text-gray-700 font-medium'>US</span></p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets2.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nam error repellat, est aperiam sequi ipsa dolor id tempora! Cumque saepe atque obcaecati pariatur sequi possimus eius consequatur voluptatum vero.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit fuga quos consequatur nulla saepe repellendus quisquam iure fugiat optio odio.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi reprehenderit laboriosam natus aspernatur voluptatem ad!</p>
        </div>
      </div>
      <div className='text-xl my-4'>
        <p> WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>
      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-400 hover:text-white transition all duration-300 text-gray-600 cursor-pointer'>
          <b>EFFICIENCY:</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, voluptate.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-400 hover:text-white transition all duration-300 text-gray-600 cursor-pointer'>
           <b>CONVENIENCE:</b>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, explicabo</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-400 hover:text-white transition all duration-300 text-gray-600 cursor-pointer'>
           <b>PERSONALISATION:</b>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, alias.</p>
        </div>
      </div>
    </div>
  )
}

export default about
