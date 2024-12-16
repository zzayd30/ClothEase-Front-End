import React, { useEffect, useState, useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'
import { assets } from '../assets/assets'

const BestSeller = () => {

  const { products } = useContext(ShopContext);
  const [BestSeller, setBestSeller] = useState([]);
  useEffect(() => {
    const BestProduct = products.filter((item) => item.bestseller === true);
    setBestSeller(BestProduct.slice(0, 5));
  }, [products])
  return (
    <div className='my-10'>
      <div className='text-center text-3xl py-8'>
        <Title text1={"BEST"} text2={"SELLER"} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Discover our Best Sellers – the most loved and highly-rated products chosen by our customers!</p>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {BestSeller.length > 0 ? (
          BestSeller.map((item) => (
            <ProductItem
              key={item._id}
              id={item._id}
              image={`http://localhost:4000${item.image[0]}`}
              name={item.name}
              price={item.price}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No best sellers available.</p>
        )}
      </div>
    </div>
  )
}

export default BestSeller
