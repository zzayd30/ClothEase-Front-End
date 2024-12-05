import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'
import SendEmail from '../components/SendEmail'

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-16">
        <img src={assets.contact_img} alt="Contact Image" className='w-full md:max-w-[480px]' />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>Begumpura <br /> Lahore, Pakistan</p>
          <p className='text-gray-500'>Tel: +92 300 4567891 <br /> Email: zaidlatif30@gmail.com</p>
          <p className='font-semibold text-xl text-gray-600'>Careers at ClothEase</p>
          <p className='text-gray-500'>Learn more about our teams and job openings</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
      <SendEmail />
    </div>
  )
}

export default Contact
