import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

const CartTotal = () => {
    const { currency, deliveryCharges, GetCartAmount } = useContext(ShopContext);

    return (
        <div className='w-full'>
            <div className="text-2xl">
                <Title text1={"CART"} text2={"TOTAL"} />
            </div>
            <div className="flex flex-col gap-2 text-sm mt-2">
                <div className="flex justify-between">
                    <p>Subtotal</p>
                    <p>{currency}{GetCartAmount()}.00</p>
                </div>
                <hr />
                <div className="flex justify-between">
                    <p>Shipping Charges</p>
                    <p>{currency}{deliveryCharges}.00</p>
                </div>
                <hr />
                <div className="flex justify-between">
                    <b>Total</b>
                    <b>{currency}{GetCartAmount() === 0 ? 0 : GetCartAmount() + deliveryCharges}.00</b>
                </div>
            </div>
        </div>
    )
}

export default CartTotal
