import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState, useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'

const Product = () => {
  const { productId } = useParams()
  const { products, currency } = useContext(ShopContext)
  const [ProductData, setProductData] = useState(false)
  const [Image, setImage] = useState("")
  const [Size, setSize] = useState("")

  const FetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item)
        setImage(item.image[0])
        return null
      }
    })
  }

  useEffect(() => {
    FetchProductData()
  }, [productId, products])

  return ProductData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className='flex gap-12 flex-col sm:flex-row sm:gap-12'>
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {
              ProductData.image.map((item, index) => (
                <img onClick={() => { setImage(item) }} src={item} alt="Product Image" className='w-[24%] cursor-pointer sm:w-full sm:mb-3 flex-shrink-0' />
              ))
            }
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={Image} alt="Product Image" className='w-full h-auto' />
          </div>
        </div>

        <div className="flex-1">
          <h1 className='font-medium text-2xl mt-2'>{ProductData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_dull_icon} alt="" className="w-3.5" />
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{ProductData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{ProductData.description}</p>
          <div className="flex flex-col gap-4 my-3">
            <p>Select Size</p>
            <div className="flex gap-2">
              {
                ProductData.sizes.map((item, index) => (<button onClick={() => { setSize(item) }} className={`border py-2 px-4 bg-gray-100 ${item === Size ? "border-orange-500" : ""}`} key={index}>{item}</button>))
              }
            </div>
          </div>
          <button className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700 '>ADD TO CART</button>
          <hr className='mt-3 sm:w-4/5' />
          <div className="text-sm text-gray-500 mt-1 flex flex-col gap-1">
            <p>100% Original Product</p>
            <p>Cash on Delivery</p>
            <p>Easy Return and Exchange Policy</p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="flex">
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto perferendis cupiditate iure ea soluta aperiam id tempore fugit! Consequatur veritatis quo atque ea?</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae quisquam aut suscipit, magni ex quod sapiente corporis dolorem velit consequatur maiores assumenda id.</p>
        </div>
      </div>

              

    </div>
  ) : <div className='opacity-0'></div>
}

export default Product
