import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const Contactus = () => {

  const [message, setMessage] = useState('')
  const [first, setFirst] = useState('')
  const [last, setLast] = useState('')
  const [email, setEmail] = useState('')

  async function submitHandler(e){
    e.preventDefault();
    const data = {
      first,
      last,
      email,
      message
    }
    await axios.post('/api/contactus', data)
    .then(res=>{
      console.log(res)
      toast.success(res.data.message)
      reset()
    })
    .catch(err=>{
      toast.error('Sorry! site is not working')
    }
    )

    function reset(){
      setEmail('');
      setFirst('');
      setLast('');
      setMessage('')
    }
  }
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl">
            We’re here to assist you. Whether you have questions or need support, our team is always ready to help.
          </p>
        </div>
      </section>

      {/* Contact Form and Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div>
            <h2 className="text-4xl font-extralight mb-6 text-teal-800">Get in touch</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolores praesentium quia nihil est possimus non nesciunt modi. Explicabo voluptas distinctio modi non beatae nesciunt quas officia et consequatur harum.</p>
            <br />
            <ul className="space-y-4 text-gray-700">
              <li className="border-b-[1px] border-gray-300">
                <span className="font-semibold">Address:</span> 123 Ceramic Lane, New York, NY 10001, United States
              </li>
              <li className="border-b-[1px] border-gray-300">
                <span className="font-semibold">Phone:</span> +1 555-555-555
              </li>
              <li className="border-b-[1px] border-gray-300">
                <span className="font-semibold">Email:</span> info@brandstore.com
              </li>
            </ul>
            <div className="mt-8 flex space-x-4">
              <a
                href="#"
                className="p-3 bg-gray-200 rounded-full text-teal-800 hover:bg-teal-800 hover:text-white transition"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="p-3 bg-gray-200 rounded-full text-teal-800 hover:bg-teal-800 hover:text-white transition"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="p-3 bg-gray-200 rounded-full text-teal-800 hover:bg-teal-800 hover:text-white transition"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={submitHandler} className="bg-gray-100 p-8">
            <h2 className="text-2xl font-bold text-teal-800 mb-6">Send us a message</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                placeholder="First Name"
                name="first"
                value={first}
                required
                onChange={(e)=>setFirst(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-[1px] focus:ring-black"
              />
              <input
                type="text"
                placeholder="Last Name"
                name="last"
                value={last}
                required
                onChange={(e)=>setLast(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-[1px] focus:ring-black"
              />
            </div>
            <div className="mb-6">
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                required
                onChange={(e)=>setEmail(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-[1px] focus:ring-black"
              />
            </div>
            <div className="mb-6">
              <textarea
                placeholder="Your Message"
                name="message"
                value={message}
                required
                onChange={(e)=>setMessage(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg h-32 focus:outline-none focus:ring-[1px] focus:ring-black"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full border-[1px] text-black border-black py-3 rounded-lg font-bold text-lg hover:bg-gray-300 hover:border-none transition">
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-center text-teal-800 mb-12">FAQs</h2>
          <div className="space-y-6">
            <details className="bg-white p-6 rounded-lg shadow-md group">
              <summary className="font-bold text-lg text-gray-700 cursor-pointer group-hover:text-teal-800">
                Ordering and Shipping
              </summary>
              <p className="mt-4 text-gray-600">
                Here you can find information about ordering and shipping processes.
              </p>
            </details>
            <details className="bg-white p-6 rounded-lg shadow-md group">
              <summary className="font-bold text-lg text-gray-700 cursor-pointer group-hover:text-teal-800">
                Returns and Refunds
              </summary>
              <p className="mt-4 text-gray-600">Learn about our return and refund policies.</p>
            </details>
            <details className="bg-white p-6 rounded-lg shadow-md group">
              <summary className="font-bold text-lg text-gray-700 cursor-pointer group-hover:text-teal-800">
                Product Care and Maintenance
              </summary>
              <p className="mt-4 text-gray-600">Tips for keeping your ceramics in top condition.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, repellat voluptatem. Fugit culpa optio commodi, rerum obcaecati esse harum. Itaque blanditiis voluptates maiores accusantium sequi reiciendis dolorem, qui beatae modi.
              </p>
            </details>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Contactus;
