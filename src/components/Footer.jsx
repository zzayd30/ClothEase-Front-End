import React from 'react'
import { Navigate } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm'>
        <div>
          <span className='font-semibold text-3xl'>ClothEase</span><span className='font-extrabold text-3xl text-gray-700'>.</span>
          <p className='w-full md:w-2/3 text-gray-600 mt-5'>Welcome to ClothEase, where style meets convenience! Dedicated to bringing you high-quality clothing, we caters to every occasion, mood, and personality. From trendy topwear and comfortable bottomwear to cozy winterwear, we have something for everyone.</p>
        </div>
        <div>
          <p className='text-xl mb-5 font-semibold'>Company</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className='text-xl mb-5 font-semibold'>Get In Touch</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+92 321 4567890</li>
            <li>ClothEase@gmail.com</li>
          </ul>
        </div>
      </div >
      <div>
        <hr />
        <div className="flex justify-center items-center">
          <p className='py-5 text-sm flex gap-1'>Copyright © 2024 - All right reserved by<p className='cursor-pointer hover:underline' onClick={Navigate("/")}>ClothEase</p></p>
          </div>
      </div>
    </div>
  )
}

export default Footer
