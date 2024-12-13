import React, { useContext } from 'react'
import { useState,useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {
  const [CurrentState, setCurrentState] = useState("Sign Up")
  const { token, setToken, Navigate } = useContext(ShopContext)
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const OnSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (CurrentState === "Sign Up") {
        const response = await axios.post("http://localhost:4000" + "/api/user/register", { name, email, password })
        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem("token", response.data.token)
        }
        else {
          toast.error(response.data.message)
        }
      }
      else {
        const response = await axios.post("http://localhost:4000" + "/api/user/login", { email, password })
        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem("token", response.data.token)
        }
        else {
          toast.error(response.data.message)
        }
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if (token) {
      Navigate('/')
    }
  }, [token])
  

  return (
    <form onSubmit={OnSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className='prata-regular text-3xl'>{CurrentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>
      {CurrentState === "Login" ? "" : <input onChange={(e) => { setName(e.target.value) }} value={name} type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required />}
      <input onChange={(e) => { setEmail(e.target.value) }} value={email} type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required />
      <input onChange={(e) => { setPassword(e.target.value) }} value={password} type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        {CurrentState === "Sign Up" ? "" : <p className="cursor-pointer">Forgot your password?</p>}
        {
          CurrentState === "Login" ? <p onClick={() => { setCurrentState("Sign Up") }} className='cursor-pointer'>Create Account</p> : <p onClick={() => { setCurrentState("Login") }} className='cursor-pointer'>Log In here</p>
        }
      </div>
      <button className='bg-black text-white font-light px-8 py-2 mt-4'>{CurrentState === "Login" ? "Sign In" : "Sign Up"}</button>
    </form>
  )
}

export default Login
