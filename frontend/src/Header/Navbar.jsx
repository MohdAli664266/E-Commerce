import React, { useState } from 'react';
import Logo from '../assets/lion_logo.png';
import { NavLink } from 'react-router-dom';
import useNavItems from './CustomeHook';
import axios from 'axios';
import toast from 'react-hot-toast';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navArr = useNavItems();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    const data = {
      searchTerm
    }
    
    await axios.post('/api/search', data)
    .then(res=>{
      // console.log(res)
      toast.success(res.data.message)
    }
    ).catch(err=>console.log(err)
    )
  };

  return (
    <nav className="bg-gradient-to-r px-6 py-4 font-semibold shadow-lg">
      {/* Desktop and Mobile Menu */}
      <div className="flex justify-between items-center gap-8">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src={Logo}
            alt="Lion Logo"
            width="80"
            height="80"
            className="rounded-full"
          />
          <span className="text-4xl font-extralight tracking-wide">Unique Brand</span>
        </div>

        {/* Search Bar */}
        <form
          className="hidden md:flex items-center flex-grow mx-4 rounded-lg border-[1px] border-gray-300 overflow-hidden"
          onSubmit={handleSearchSubmit}
        >
          <input
            type="text"
            name='search'
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search..."
            className="w-full py-2 pl-2 focus:outline-none focus:ring focus:ring-gray-300"
          />
          <button
            type="submit"
            className="p-2 bg-gray-100/90 hover:bg-gray-200"
          >
            Search
          </button>
        </form>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          {navArr.map((item, index) => (
            <NavLink
              key={index}
              to={`/${item.replace(/\s+/g, '').toLowerCase()}`}
              className="hover:text-gray-300 transition-all duration-200 ease-in-out"
            >
              <li>{item}</li>
            </NavLink>
          ))}
        </ul>

        {/* Hamburger Menu Icon */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex items-center text-2xl focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 7.5h16.5m-16.5 7.5h16.5"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <>
          <form
            className="flex flex-col mt-4 gap-2 md:hidden"
            onSubmit={handleSearchSubmit}
          >
            <input
              type="text"
              name='search'
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-gray-300"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-gray-500"
            >
              Search
            </button>
          </form>
          <ul className="flex flex-col gap-4 mt-4 md:hidden">
            {navArr.map((item, index) => (
              <NavLink
                key={index}
                to={`/${item.replace(/\s+/g, '').toLowerCase()}`}
                className="hover:text-gray-300 transition-all duration-200 ease-in-out text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                <li>{item}</li>
              </NavLink>
            ))}
          </ul>
        </>
      )}
    </nav>
  );
}

export default Navbar;
