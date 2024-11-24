import React from 'react'
import {Routes, Route} from 'react-router-dom'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Login from './pages/Login'
import Product from './pages/Product'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Collection from './pages/Collection'
import Cart from './pages/Cart'
import About from './pages/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar />
      <Routes>
        <Route path='/About' element={<About />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/Collection' element={<Collection />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Orders' element={<Orders />} />
        <Route path='/PlaceOrder' element={<PlaceOrder />} />
        <Route path='/Product/:productId' element={<Product />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
