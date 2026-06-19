// Navbar.jsx
import { FaShoppingCart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-lg px-4 md:px-8 py-4 border-b">
      <div className="flex items-center justify-between">

        {/* Left Side */}
        

          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600">
            ShopEase
          </div>

          {/* Menu Button */}
          

        {/* Search Bar */}
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search products..."
            className="border border-gray-300 rounded-l-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700">
            Search
          </button>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <Link
            to="/signin"
            className="border border-blue-600 text-blue-600 px-5 py-2 rounded-lg hover:bg-blue-50"
          >
            Signin
          </Link>

          <Link
            to="/signup"
            className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
          >
            Signup
          </Link>


<Link
  to="/cart"
  className="relative flex items-center justify-center w-12 h-12 rounded-full bg-green-100 hover:bg-yellow-300 transition duration-300"
>
  <IoCartOutline className="text-3xl text-black-700" />

  {/* Cart Count */}
  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
    3
  </span>
</Link>
        </div>
<div
  className="relative"
  onMouseEnter={() => setMenuOpen(true)}
  onMouseLeave={() => setMenuOpen(false)}
>
  <button
    className="flex items-center gap-2 px-4 py-2 bg-white border rounded-xl shadow-sm hover:shadow-md"
  >
    ☰ Menu
  </button>

  {menuOpen && (
    <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border z-50">
      <ul className="py-2">
        <li>
          <Link
            to="/home"
            className="block px-4 py-3 hover:bg-blue-50"
          >
            🏠 Home
          </Link>
        </li>

        <li>
          <Link
            to="/products"
            className="block px-4 py-3 hover:bg-blue-50"
          >
            🛍️ Products
          </Link>
        </li>

        <li>
          <Link
            to="/about"
            className="block px-4 py-3 hover:bg-blue-50"
          >
            ℹ️ About
          </Link>
        </li>

        <li>
          <Link
            to="/contact"
            className="block px-4 py-3 hover:bg-blue-50"
          >
            📞 Contact
          </Link>
        </li>
      </ul>
    </div>
  )}
</div>
        </div>
      
    </nav>
  );
}