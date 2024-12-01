import React from 'react'
import { useState } from 'react'

const Login = () => {
  const [CurrentState, setCurrentState] = useState("Sign Up")

  const OnSubmitHandler = async (e) => {
      e.preventDefault();
  }

  return (
    <form onSubmit={OnSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className='prata-regular text-3xl'>{CurrentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>
      {CurrentState === "Login" ? "" : <input type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required />}
      <input type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required />
      <input type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        {CurrentState === "Sign Up" ? "" : <p className="cursor-pointer">Forgot your password?</p>}
        {
          CurrentState === "Login" ? <p onClick={() =>{setCurrentState("Sign Up")}} className='cursor-pointer'>Create Account</p> : <p onClick={() =>{setCurrentState("Login")}} className='cursor-pointer'>Log In here</p>
        }
      </div>
      <button className='bg-black text-white font-light px-8 py-2 mt-4'>{CurrentState === "Login" ? "Sign In" : "Sign Up"}</button>
    </form>
  )
}

export default Login
