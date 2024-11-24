import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import { useLocation } from 'react-router-dom'

const SearchBar = () => {
    const { Search, setSearch, ShowSearch, setShowSearch } = useContext(ShopContext)
    const Location = useLocation();
    const [Visible, setVisible] = useState(false)
    useEffect(() => {
        if(Location.pathname === '/Collection'){
            setVisible(true)
        }
        else{
            setVisible(false)
        }
    }, [Location])
    
    return ShowSearch && Visible ? (
        <div className='border-t border-b text-center bg-gray-50'>
            <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
                <input value={Search} onChange={(e)=>{setSearch(e.target.value)}} className='flex-1 outline-none bg-inherit text-sm' type="text" placeholder='Search' />
                <img src={assets.search_icon} alt="Search Icon" className='w-4' />
            </div>
            <img onClick={(e)=>{setShowSearch(false)}} src={assets.cross_icon} alt="Cross Icon" className='inline w-3 cursor-pointer' />
        </div>
    ) : null
}

export default SearchBar
