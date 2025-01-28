import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

function AdminPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [prodDetails, setprodDetails] = useState(false);
  const [userDetails, setUserDetails] = useState(false);


  return (
    <div className="container mx-auto p-6 flex gap-6 min-h-screen">
      {/* Sidebar Filters */}
      <div className="w-1/4 border-r pr-4 bg-gray-400/10 p-4">
        <h2 className="text-lg font-bold mb-2">Admin Panel</h2>

        {/* Product Dropdown */}
        <div className="font-semibold transition-all duration-500 ease-in-out">
          <div
            className="cursor-pointer flex justify-between items-center p-2 hover:bg-gray-400 bg-gray-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            Create Product
          </div>

          {/* Animated Submenu */}
          <ul
            className={`pl-10 bg-gray-200 overflow-hidden transition-[max-height] duration-500 ease-in-out ${
              isOpen ? "max-h-40 opacity-100" : "max-h-0"
            }`}
          >
            <li className="hover:bg-gray-400 p-2 font-thin">
              <NavLink to="createcategory">Create Category</NavLink>
            </li>
            <li className="hover:bg-gray-400 p-2 font-thin">
              <NavLink to="addproduct">Add Product</NavLink>
            </li>
          </ul>
        </div>

        {/* Product Details */}
        <div className="font-semibold transition-all duration-500 ease-in-out">
          <div
            className="cursor-pointer flex justify-between items-center p-2 hover:bg-gray-400 bg-gray-300"
            onClick={() => setprodDetails(!prodDetails)}
          >
            Product Details
          </div>

          {/* Animated Submenu */}
          <ul
            className={`pl-10 bg-gray-200 overflow-hidden transition-[max-height] duration-500 ease-in-out ${
              prodDetails ? "max-h-40 opacity-100" : "max-h-0"
            }`}
          >
            <li className="hover:bg-gray-400 p-2 font-thin">
              <NavLink to="createcategory">Create Category</NavLink>
            </li>
            <li className="hover:bg-gray-400 p-2 font-thin">
              <NavLink to="addproduct">Add Product</NavLink>
            </li>
          </ul>
        </div>

        {/* Users details  */}

        <div className="font-semibold transition-all duration-500 ease-in-out">
          <div
            className="cursor-pointer flex justify-between items-center p-2 hover:bg-gray-400 bg-gray-300"
            onClick={() => setUserDetails(!userDetails)}
          >
            Users Details
          </div>

          {/* Animated Submenu */}
          <ul
            className={`pl-10 bg-gray-200 overflow-hidden transition-[max-height] duration-500 ease-in-out ${
              userDetails ? "max-h-40 opacity-100" : "max-h-0"
            }`}
          >
            <li className="hover:bg-gray-400 p-2 font-thin">
              <NavLink to="createcategory">Create Category</NavLink>
            </li>
            <li className="hover:bg-gray-400 p-2 font-thin">
              <NavLink to="addproduct">Add Product</NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Rendering Pages */}
      <div className="w-full">
      <Outlet />
      </div>
      
    </div>
  );
}

export default AdminPanel;
