import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import SendEmail from '../components/SendEmail'

const Contact = () => {
  return (
    <div className='lg:min-h-[76vh] lg:max-w-screen-lg'>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-center gap-6">
        <img
          className="w-full max-h-[400px] md:max-h-[450px] lg:max-h-[500px] md:w-[40%] lg:w-[45%] object-cover"
          src={assets.contact_img}
          alt="Contact Image"
        />
        <div className="w-full md:w-[60%]">
          <SendEmail />
        </div>
      </div>
    </div>
  )
}

export default Contact
