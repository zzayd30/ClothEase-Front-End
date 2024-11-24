import React from 'react'

const NewsLetterBox = () => {
    const SubmitHandler = (e) => {
    e.preventDefault();
    alert('You have successfully subscribed to our newsletter!');
    e.target.reset();
    }
  return (
    <div className='text-center'>
      <div className='text-2xl font-medium text-gray-800 '> Subscribe now and get 20% off!</div>
      <form onSubmit={SubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' required/>
        <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default NewsLetterBox
