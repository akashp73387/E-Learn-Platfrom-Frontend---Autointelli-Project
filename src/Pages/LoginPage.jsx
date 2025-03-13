 import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import Navbar from "../Components/Navbar";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <Navbar/>
      <div className="min-h-screen flex items-center justify-center bg-gray-500 dark:bg-gray-900">
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 max-w-md w-full">
          {/* Logo */}
          <div className="flex justify-center mb-6">
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
              className="text-red-600"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4l3 3" />
            </svg>
          </div>

          {/* Heading */}
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
            Welcome Back
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-center">
            Please sign in to continue
          </p>

          {/* Form */}
          <form className="mt-6">
            {/* Email Input */}
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 font-medium">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>

            {/* Password Input */}
            <div className="mb-4 relative">
              <label className="block text-gray-700 dark:text-gray-300 font-medium">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-10 text-gray-500 dark:text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Forgot Password & Remember Me */}
            <div className="flex justify-between items-center text-sm mb-4">
              <div>
                <input type="checkbox" id="rememberMe" className="mr-2" />
                <label
                  htmlFor="rememberMe"
                  className="text-gray-600 dark:text-gray-400"
                >
                  Remember me
                </label>
              </div>
              <Link
                to="/forgot-password"
                className="text-red-500 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            {/* Login Button */}
            <button className="w-full bg-red-600 hover:bg-red-700  text-white font-medium py-2 rounded-lg transition">
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="text-center my-4 text-gray-500 dark:text-gray-400">
            or
          </div>

          {/* Social Login Buttons */}
          <button className="w-full flex items-center justify-center border border-gray-300 dark:border-gray-600 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
            <img
              src="https://yt3.googleusercontent.com/FJI5Lzbf2dMd32xOqhoKpJArJooZhoX6v2qOcFO-wjSZUvs3H9xqq2gK4DQ47X0KnYgf7X2rpdU=s900-c-k-c0x00ffffff-no-rj"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Sign in with Google
          </button>

          {/* Signup Link */}
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-4">
            Don't have an account?{" "}
            <Link to="/signup" className="text-red-500 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
