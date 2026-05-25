// Navbar.jsx

import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-8 py-4 flex items-center justify-between">
      
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">
        ShopEase
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
        <li>
          <Link to="/home" className="hover:text-blue-600 transition">
            Home
          </Link>
        </li>

        <li>
          <Link to="/products" className="hover:text-blue-600 transition">
            Products
          </Link>
        </li>

        <li>
          <Link to="/about" className="hover:text-blue-600 transition">
            About
          </Link>
        </li>

        <li>
          <Link to="/contact" className="hover:text-blue-600 transition">
            Contact
          </Link>
        </li>
      </ul>

      {/* Buttons */}
      <div className="flex gap-4">
        <Link
          to="/signin"
          className="border border-blue-600 text-blue-600 px-5 py-2 rounded-lg hover:bg-blue-50 transition"
        >
          Sign In
        </Link>

        <Link
          to="/signup"
          className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Sign Up
        </Link>
       <Link
          to="/cart"
          className="bg-green-500 text-white px-7 py-2 rounded-lg hover:bg-yellow-300 transition"
        >
          MyCart
        </Link>
      
      </div>
    </nav>
  );
}