 import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";

 const ForgotPassword = () => {
   return (
     <div>
       <Navbar />
       <div className="flex items-center justify-center min-h-screen bg-gray-500">
         <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
           {/* Logo */}
           <div className="flex justify-center">
             <svg
               xmlns="http://www.w3.org/2000/svg"
               width="50"
               height="50"
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

           <h2 className="text-2xl font-bold text-center text-gray-800 mt-4">
             Forgot Password?
           </h2>

           <p className="text-center text-gray-600 mt-2">
             Enter your email to receive a password reset link.
           </p>

           <form className="mt-6">
             <div>
               <label className="block text-gray-700 font-medium">Email</label>
               <input
                 type="email"
                 className="mt-1 px-4 py-2 w-full border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                 placeholder="Enter your email"
               />
             </div>

             <div className="mt-6">
               <button className="w-full px-4 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition">
                 Send Reset Link
               </button>
             </div>
           </form>

           <p className="text-center text-gray-600 text-sm mt-4">
             Remember your password?{" "}
             <Link to="/login" className="text-red-500 hover:underline">
               Log in
             </Link>
           </p>
         </div>
       </div>
     </div>
   );
 };

 export default ForgotPassword;
