import React, { useState } from 'react';
import Footer from './Footer.jsx';

const Contact = () => {
  const [data, setData] = useState({
    full_name: "",
    mobile_no: "",
    email: "",
    message: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(`My name is ${data.full_name}, ${data.mobile_no} is my phone no. and my email id is ${data.email} and I want to say that ${data.message}`);
  };

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white">
      <div className="my-1">
        <div className="text-center font-bold text-3xl ">Contact us</div>
      </div>
      <div className="container  mb-10 max-w-[500px] mx-auto space-y-2">
        <div className="grid grid-cols-1  gap-6 w-auto mt-16  ">
          <div>
            <form onSubmit={formSubmit}>
              <div className="mb-4 ">
                <label htmlFor="full_name" className="block text-gray-700 font-bold mb-2">Full Name:</label>
                <input type="text" id="full_name" name="full_name" value={data.full_name} onChange={InputEvent} placeholder="Enter your full name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-neutral-900" />
              </div>
              <div className="mb-4">
                <label htmlFor="mobile_no" className="block text-gray-700 font-bold mb-2">Phone No:</label>
                <input type="tel" id="mobile_no" name="mobile_no" value={data.mobile_no} onChange={InputEvent} placeholder="Enter your phone number" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-neutral-900" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
                <input type="email" id="email" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-neutral-900" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-5">Message:</label>
                <textarea id="message" name="message" value={data.message} onChange={InputEvent} rows="3" placeholder="Your message..." className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-neutral-900"></textarea>
              </div>
              <div className="flex justify-center">
                <button type="submit" className="bg-slate-700 dark:bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
              </div>
            </form>
          </div>
        </div>
        
      </div>
      <Footer/>
    </div>
  );
}

export default Contact;
