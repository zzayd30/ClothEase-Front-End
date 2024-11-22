import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const ProductItem = ({id, image, name, price}) => {
    const { currency } = useContext(ShopContext)
    return (
        <Link className='cursor-pointer text-gray-700' to={`/Product/${id}`}>
            <div className="overflow-hidden">
                <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="Product Image" />
            </div>
            <p className='pt-3 pb-1 text-sm'>{name}</p>
            <p className='text-sm font-medium'>
                {currency} {price}
            </p>
        </Link>
    )
}

export default ProductItem
