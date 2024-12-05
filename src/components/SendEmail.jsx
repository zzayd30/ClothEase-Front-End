import React from 'react'

const SendEmail = () => {
  return (
    <div>
      <div
        className="right border m-4 lg:m-8 lg:w-1/2 bg-white border-black rounded-md"
      >
        <div className="h-[45px] w-[90%] m-auto my-2 pt-4">
          <span>Name</span>
        </div>
        <div className="h-[45px] w-[90%] m-auto my-2">
          <input
            id="name"
            type="text"
            placeholder="Enter Your Name..."
            value=""
            className="input input-bordered border-black border p-3 w-[100%] max-w-lg font-semibold bg-white"
          />
        </div>
        <div className="h-[45px] w-[90%] m-auto my-2 pt-4">
          <span>Email</span>
        </div>
        <div className="h-[45px] w-[90%] m-auto my-2">
          <input
            type="text"
            placeholder="Enter Your Email..."
            id="email"
            value=""
            className="input input-bordered border-black border p-3 w-[100%] max-w-lg font-semibold bg-white"
          />
        </div>
        <div className="h-[45px] w-[90%] m-auto my-2 pt-4">
          <span>Subject</span>
        </div>
        <div className="box6 h-[45px] w-[90%] m-auto my-2">
          <input
            type="text"
            placeholder="Enter Subject..."
            id="subject"
            value=""
            className="input input-bordered border-black border p-3 w-[100%] max-w-lg font-semibold bg-white"
          />
        </div>
        <div className="h-[45px] w-[90%] m-auto my-2 pt-4">
          <span>Message</span>
        </div>
        <div className="h-[45px] w-[90%] m-auto my-2">
          <textarea
            id="message"
            value=""
            className="textarea textarea-bordered border-black border p-3 w-[100%] max-w-lg font-semibold bg-white h-[170px]"
            placeholder="Enter Your Message..."
          ></textarea>
        </div>
        <button
          id="send-btn"
          className="btn border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 mt-[130px] ml-[30px] mb-6"
        >
          Send Message
        </button>
      </div>
    </div>
  )
}

export default SendEmail
