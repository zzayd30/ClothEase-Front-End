import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const SendEmail = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);  // Set loading to true when request starts
    setErrorMessage(""); // Reset previous error message

    // Prepare template parameters
    const templateParams = {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
    };

    // Send the email via EmailJS
    emailjs.send(
      'service_mji72wi',       // EmailJS service ID
      'template_itpqrmd',      // EmailJS template ID
      templateParams,          // Template parameters
      'udq9XLuX-kA06VzUz'     // EmailJS user ID
    )
      .then((response) => {
        setLoading(false); // Set loading to false after receiving response
        setSuccessMessage("Email sent successfully!");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch((error) => {
        setLoading(false);
        setErrorMessage("An error occurred while sending the email. Please try again.");
        console.error(error);
      });
  };

  return (
    <div className="w-full p-4 sm:p-6 lg:p-8">
      <div className="bg-white border border-black rounded-md p-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter Your Name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered border border-black p-2 w-full rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter Your Email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered border border-black p-2 w-full rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="mb-2 block text-sm font-medium">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              placeholder="Enter Subject..."
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="input input-bordered border border-black p-2 w-full rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="mb-2 block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Enter Your Message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="textarea textarea-bordered border border-black p-2 w-full h-[150px] rounded-md"
              required
            ></textarea>
          </div>
          <button
            id="send-btn"
            type="submit"
            className="btn border border-black px-6 py-2 text-sm w-full sm:w-auto hover:bg-black hover:text-white transition-all duration-300"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        {successMessage && <p className="text-green-500 text-sm mt-2">{successMessage}</p>}
        {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default SendEmail;
