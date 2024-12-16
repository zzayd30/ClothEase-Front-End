import React from 'react'
import { Navigate } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <hr className='mt-8' />
      <div className="flex justify-center items-center">
        <p className='py-5 text-sm flex gap-1'>Copyright © 2024 - All right reserved by<p className='cursor-pointer hover:underline' onClick={Navigate("/")}>ClothEase</p></p>
      </div>
    </div>
  )
}

export default Footer
