import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-500 shadow-md ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo & Brand Name */}
          <Link to="/">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4l3 3" />
              </svg>
              <span className="ml-3 text-2xl font-semibold text-gray-800 dark:text-white">
                E-Learn
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <a
                href="#home"
                className="text-gray-800 dark:text-white hover:text-red-600"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-800 dark:text-white hover:text-red-600"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-gray-800 dark:text-white hover:text-red-600"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-800 dark:text-white hover:text-red-600"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Buttons & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <button className="hidden md:flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                  <polyline points="10 17 15 12 10 7" />
                  <line x1="15" x2="3" y1="12" y2="12" />
                </svg>
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="hidden md:flex items-center px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="M12 2a4 4 0 0 1 4 4v2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h4V6a4 4 0 0 1 4-4z" />
                  <line x1="12" x2="12" y1="12" y2="18" />
                  <line x1="9" x2="15" y1="15" y2="15" />
                </svg>
                Sign Up
              </button>
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 py-2">
          <ul className="flex flex-col space-y-2">
            <li>
              <a
                href="#home"
                className="block py-2 text-gray-800 dark:text-white hover:text-blue-600"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block py-2 text-gray-800 dark:text-white hover:text-blue-600"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="block py-2 text-gray-800 dark:text-white hover:text-blue-600"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 text-gray-800 dark:text-white hover:text-blue-600"
              >
                Contact
              </a>
            </li>
            <li>
              <button className="w-full py-2 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                Login
              </button>
            </li>
            <li>
              <button className="w-full py-2 bg-orange-600 text-white rounded-lg hover:bg-gray-700">
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
