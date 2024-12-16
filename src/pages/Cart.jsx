import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useState, useEffect } from 'react'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const { CartItem, products, currency, UpdateQuantity, Navigate, backendUrl } = useContext(ShopContext);
  const [CartData, setCartData] = useState([])
  useEffect(() => {
    if (products.length > 0) {
      const TempData = [];
      for (const items in CartItem) {
        for (const item in CartItem[items]) {
          if (CartItem[items][item] > 0) {
            TempData.push({
              _id: items,
              size: item,
              quantity: CartItem[items][item]
            })
          }
        }
      }
      setCartData(TempData)
    }

  }, [CartItem, products])

  return (
    <div className='border-t min-h-[76vh] pt-14'>
      <div className="text-2xl mb-3">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>

      <div className="">
        {
          CartData.map((item, index) => {
            const productData = products.find((product) => product._id === item._id);
            return (
              <div key={index} className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4">
                <div className="flex items-start gap-6">
                  <img className='w-16 sm:w-20' src={`${backendUrl}${productData.image[0]}`} alt="Product Image" />
                  <div>
                    <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                    <div className="flex items-center gap-5 mt-2">
                      <p>{currency}{productData.price}</p>
                      <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{item.size}</p>
                    </div>
                  </div>
                </div>
                <input onChange={(e) => e.target.value === "" || e.target.value === "0" ? null : UpdateQuantity(item._id, item.size, Number(e.target.value))} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' type="number" min={1} defaultValue={item.quantity} />
                <img onClick={() => { UpdateQuantity(item._id, item.size, 0) }} className='w-4 mr-4 sm:w-5 cursor-pointer' src={assets.bin_icon} alt="Bin Icon" />
              </div>
            )
          })
        }
      </div>
      { CartData.length > 0 ? 
        <div className="flex justify-center my-20">
          <div className="w-full sm:w-[450px]">
            <CartTotal />
            <div className="w-full text-end">
              <button onClick={() => { Navigate("/PlaceOrder") }} className='bg-black text-white text-sm my-8 px-8 py-3'>Proceed To Check Out</button>
            </div>
          </div>
        </div> : <div className="text-center my-20">Your Cart is Empty</div>
      }
    </div>
  )
}

export default Cart
