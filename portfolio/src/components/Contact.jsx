import React, { useState } from 'react';
import FadeInWrapper from './FadeInWrapper';

const Contact = () => {

  const [submitted, setSubmitted] = useState(false);


  
  return (
    <section id="contact" className="bg-[#0f172a] text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <FadeInWrapper direction='up' delay={0.2}>
          <h2 className="text-4xl font-bold mb-8  border-blue-600 inline-block">
          Contact Me
        </h2>
        </FadeInWrapper>
        

        <p className="mb-6 text-gray-300">
          Have a project in mind or just want to say hi? Fill out the form below!
        </p>

        <FadeInWrapper direction='up' delay={0.4}>
          <form
  onSubmit={(e) => {
    e.preventDefault();
    const formEl = e.target;
    const data = new FormData(formEl);

    fetch('https://formspree.io/f/mvgreoal', {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
      },
    }).then((res) => {
      if (res.ok) {
        setSubmitted(true);
        formEl.reset(); // clear form

        // auto-hide toast after 4 seconds
        setTimeout(() => setSubmitted(false), 4000);
      }
    });
  }}
  className="bg-[#1e293b] p-8 rounded-lg shadow-md space-y-6"
>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded bg-[#0f172a] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded bg-[#0f172a] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full p-3 rounded bg-[#0f172a] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          


          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition duration-300"
          >
            Send Message
          </button>
        </form>
        </FadeInWrapper>

        
        {submitted && (
  <div className="fixed inset-0 flex items-center justify-center z-50">
    <div className="bg-green-600 text-white px-6 py-4 rounded-lg shadow-lg animate-fade-in transition duration-300 text-lg font-medium">
       Message sent successfully!
    </div>
  </div>
)}
      </div>
    </section>
  );
};

export default Contact;
