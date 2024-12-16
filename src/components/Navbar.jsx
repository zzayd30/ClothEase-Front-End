import React from 'react'
import { assets } from "../assets/assets"
import { useState, useContext } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {
    const [Visible, setVisible] = useState(false)
    const { ShowSearch, setShowSearch, GetCartCount, Navigate, token, setToken, setCartItems, backendUrl } = useContext(ShopContext)
    const location = useLocation();
    const logout = () => {
        Navigate("/Login")
        localStorage.removeItem("token");
        setToken("")
        setCartItems({})
    }
    return (
        <div className='flex items-center justify-between font-medium py-5'>
            <Link to="/"><span className='text-3xl'>ClothEase</span><span className='text-3xl text-gray-700'>.</span></Link>
            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                <NavLink to="/" className="flex flex-col items-center gap-1">
                    <p>Home</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
                </NavLink>
                <NavLink to="/Collection" className="flex flex-col items-center gap-1">
                    <p>Collection</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
                </NavLink>
                <NavLink to="/About" className="flex flex-col items-center gap-1">
                    <p>About</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
                </NavLink>
                <NavLink to="/Contact" className="flex flex-col items-center gap-1">
                    <p>Contact</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
                </NavLink>
            </ul>
            <div className='flex items-center gap-6'>
                {location.pathname === "/Collection" ? <img onClick={(e) => { setShowSearch(!ShowSearch) }} src={assets.search_icon} alt="Search Icon" className='cursor-pointer w-5' /> : null}
                <div className='group relative'>
                    <img onClick={() => { token ? null : Navigate("/Login") }} src={assets.profile_icon} alt="Profile Icon" className='cursor-pointer w-5' />
                    {token && <div className='group-hover:block hidden absolute pt-4 dropdown-menu right-0'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                            <p onClick={()=>{Navigate("/Orders")}} className='cursor-pointer hover:text-black'>My Orders</p>
                            <p onClick={logout} className='cursor-pointer hover:text-black'>Log Out</p>
                        </div>
                    </div>}
                </div>
                <Link to="/Cart" className='relative'>
                    <img src={assets.cart_icon} alt="Cart Icon" className='w-5 min-w-5' />
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>
                        {GetCartCount()}
                    </p>
                </Link>
                <img onClick={() => { setVisible(true) }} src={assets.menu_icon} alt="Menu Icon" className='w-5 cursor-pointer sm:hidden' />
            </div>
            <div className={`absolute top-0 left-0 right-0 bottom-0 bg-white overflow-hidden transition-all ${Visible ? 'w-full' : 'w-0'}`}>
                <div className="flex flex-col text-gray-600">
                    <div onClick={() => { setVisible(false) }} className="flex cursor-pointer items-center gap-4 p-3">
                        <img src={assets.dropdown_icon} alt="Dropdown Icon" className='h-4 rotate-180' />
                        <p>Back</p>
                    </div>
                    <NavLink onClick={() => { setVisible(false) }} className="py-2 pl-6 border" to="/">Home</NavLink>
                    <NavLink onClick={() => { setVisible(false) }} className="py-2 pl-6 border" to="/Collection">Collection</NavLink>
                    <NavLink onClick={() => { setVisible(false) }} className="py-2 pl-6 border" to="/About">About</NavLink>
                    <NavLink onClick={() => { setVisible(false) }} className="py-2 pl-6 border" to="/Contact">Contact</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar
