import React, { useState, useEffect, useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const LatestCollection = () => {
    const [LatestProducts, setLatestProducts] = useState([])
    const {products} = useContext(ShopContext)
    useEffect(() => {
      setLatestProducts(products.slice(0, 10));
    }, [products])
    
  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={"LATEST"} text2={"COLLECTION"} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
        Discover stylish trends with our handpicked latest collection today!</p>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
            LatestProducts.map((item, index) => (
                <ProductItem
                  key={index}
                  id={item._id}
                  image={`http://localhost:4000${item.image[0]}`}
                  name={item.name}
                  price={item.price}
                />
              ))
        }
      </div>
    </div>
  )
}

export default LatestCollection
