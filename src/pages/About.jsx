import React from 'react'
import Title from '../components/Title'
import NewsLetterBox from '../components/NewsLetterBox'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className=" my-10 flex flex-col md:flex-row gap-16">
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="About Image" />
        <div className="flex flex-col justify-center gap-4 md:w-2/4 text-gray-600">
          <p>Welcome to <b>ClothEase</b>, where style meets convenience! We are dedicated to bringing you a curated collection of high-quality apparel that caters to every occasion, mood, and personality. From trendy topwear and comfortable bottomwear to cozy winterwear, our diverse range of products ensures there’s something for everyone. </p>
          <b>Our Mission</b>
          <p>At ClothEase, our mission is to revolutionize the way you shop for clothing by blending fashion with functionality. We aim to provide an enjoyable shopping experience where style meets simplicity. By offering a wide selection of high-quality, affordable, and trendy apparel, we empower individuals to express their unique personalities with confidence.</p>
          <b>Our Vision</b>
          <p>At ClothEase, our vision is to make fashion accessible, sustainable, and innovative. We strive to empower individuals by offering stylish, high-quality apparel while embracing eco-friendly practices and ethical values. Our goal is to inspire confidence and individuality, fostering a future where fashion is both inclusive and responsible.</p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="flex border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5">
          <b>Quality Assurance: </b>
          <p className='text-gray-600'>We guarantee premium-quality products that are durable, stylish, and crafted with utmost care.</p>
        </div>
        <div className="flex border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5">
          <b>Convenience: </b>
          <p className='text-gray-600'>Enjoy effortless shopping with user-friendly navigation, secure payment options, and reliable doorstep delivery.</p>
        </div>
        <div className="flex border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5">
          <b>Exceptional Customer Service: </b>
          <p className='text-gray-600'>Your satisfaction is our priority, with responsive support tailored to meet your every need.</p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  )
}

export default About
