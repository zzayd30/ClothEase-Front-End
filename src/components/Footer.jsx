import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm'>
        <div>
          <span className='font-semibold text-3xl'>ClothEase</span><span className='font-extrabold text-3xl text-gray-700'>.</span>
          <p className='w-full md:w-2/3 text-gray-600 mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptatum omnis facere quo porro voluptatibus enim sint? Beatae, placeat. Labore magni quibusdam saepe voluptatem eveniet? Quam labore molestiae obcaecati! Excepturi, minus magni?</p>
        </div>
        <div>
          <p className='text-xl font-medium mb-5'>Company</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className='text-xl font-medium mb-5'>Get In Touch</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+92 321 4567890</li>
            <li>ClothEase@gmail.com</li>
          </ul>
        </div>
      </div >
      <div>
        <hr/>
        <p className='py-5 text-sm text-center'>Copyright © 2024 - All right reserved by ClothEase</p>
      </div>
    </div>
  )
}

export default Footer
