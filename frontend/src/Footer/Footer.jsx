import React from "react";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* About Section */}
          <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
            <h3 className="text-xl font-bold mb-4">About iCoder</h3>
            <p className="text-gray-400">
              iCoder is your go-to platform for learning, coding, and innovation.
              We empower developers with tools, resources, and community support
              to build amazing projects.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <NavLink to='/table'>
              <li 
                className="mb-2 text-gray-400 hover:text-indigo-500 transition">
                  All Users
                
              </li>
              </NavLink>
              
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-indigo-500 transition">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-indigo-500 transition">
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-indigo-500 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="w-full sm:w-1/3">
            <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
            <form className="flex items-center">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 text-gray-900 rounded-l-lg focus:outline-none"
              />
              <button
                type="submit"
                className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-r-lg transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-6 flex justify-between items-center">
          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-indigo-500 transition">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-indigo-500 transition">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-indigo-500 transition">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-indigo-500 transition">
              <i className="fab fa-instagram"></i>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            © 2024 iCoder. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
