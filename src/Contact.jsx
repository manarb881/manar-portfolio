import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Set timestamp just before sending
    const timestampInput = document.createElement('input');
    timestampInput.type = 'hidden';
    timestampInput.name = 'timestamp';
    timestampInput.value = new Date().toLocaleString();
    form.current.appendChild(timestampInput);

    emailjs.sendForm(
      'service_7husb7n', // Your EmailJS Service ID
      'template_e5s7l25', // Your EmailJS Template ID
      form.current,
      'ccH70b1Kh0qDyMDNa' // Your EmailJS User ID
    )
      .then((result) => {
        alert('Message sent successfully!');
        form.current.reset();
      })
      .catch((error) => {
        alert('Failed to send message, please try again.');
        console.error(error);
      })
      .finally(() => {
        // Remove the timestamp input after sending
        form.current.removeChild(timestampInput);
      });
  };

  return (
    <div className="md:ml-[3%] w-full py-10 bg-transparent flex flex-col md:flex-row items-center justify-center gap-3 relative z-10">
      <div className="w-full md:w-1/2 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 font-gilroy text-center">
          Contact Me
        </h2>
        <form ref={form} onSubmit={sendEmail} className="w-full max-w-lg p-6 bg-gray-900 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="user_email" className="block text-white text-sm font-bold mb-2">
              Your Email
            </label>
            <input
              type="email"
              name="user_email"
              id="user_email"
              required
              className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-400"
              placeholder="your.email@example.com"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-white text-sm font-bold mb-2">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows="5"
              className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-400"
              placeholder="Write your message here..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#66FF00] to-[#004d00] text-white font-bold py-3 px-4 rounded-md hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 ring-[#66FF00] hover:ring-6"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center mt-10 md:mt-0">
        <div className="bg-gradient-to-br from-green-900/60 to-black/80 border border-lime-400 rounded-2xl p-8 shadow-xl max-w-md text-white font-gilroy text-lg md:text-xl text-center">
          If you're interested in collaborating on a project or have a job opportunity that matches my interests in <span className="text-lime-400 font-bold">Data Science</span>, <span className="text-lime-400 font-bold">AI</span>, or <span className="text-lime-400 font-bold">Web Development</span>, I'd love to hear from you!
        </div>
      </div>
    </div>
  );
};

export default Contact;