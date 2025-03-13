 import React from "react";

 const Footer = () => {
   return (
     <footer className="bg-gray-900 text-gray-300 py-6">
       <div className="max-w-6xl mx-auto px-6">
         <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
           {/* Brand Section */}
           <div className="mb-4 md:mb-0">
             <h2 className="text-2xl font-bold text-white">E-Learn</h2>
             <p className="text-sm text-gray-400 mt-1">
               Elevating experiences through technology.
             </p>
           </div>

           {/* Navigation Links */}
           <div className="flex space-x-6 text-sm">
             <a href="#" className="hover:text-white transition">
               Home
             </a>
             <a href="#" className="hover:text-white transition">
               About
             </a>
             <a href="#" className="hover:text-white transition">
               Services
             </a>
             <a href="#" className="hover:text-white transition">
               Contact
             </a>
           </div>

           {/* Social Media Icons */}
           <div className="flex space-x-4 mt-4 md:mt-0">
             <a href="#" className="hover:text-white transition">
               <i className="fab fa-facebook-f"></i>
             </a>
             <a href="#" className="hover:text-white transition">
               <i className="fab fa-twitter"></i>
             </a>
             <a href="#" className="hover:text-white transition">
               <i className="fab fa-instagram"></i>
             </a>
             <a href="#" className="hover:text-white transition">
               <i className="fab fa-linkedin-in"></i>
             </a>
           </div>
         </div>

         {/* Copyright Section */}
         <div className="text-center text-sm text-gray-500 mt-4 border-t border-gray-700 pt-4">
           © {new Date().getFullYear()} E-Learn. All rights reserved.
         </div>
       </div>
     </footer>
   );
 };

 export default Footer;
