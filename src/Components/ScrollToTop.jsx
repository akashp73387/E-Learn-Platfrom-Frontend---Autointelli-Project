 import React, { useState, useEffect } from "react";

 const ScrollToTop = () => {
   const [isVisible, setIsVisible] = useState(false);

   // Show button when page is scrolled down
   useEffect(() => {
     const toggleVisibility = () => {
       if (window.scrollY > 300) {
         setIsVisible(true);
       } else {
         setIsVisible(false);
       }
     };

     window.addEventListener("scroll", toggleVisibility);
     return () => window.removeEventListener("scroll", toggleVisibility);
   }, []);

   // Scroll to top function
   const scrollToTop = () => {
     window.scrollTo({ top: 0, behavior: "smooth" });
   };

   return (
     <button
       onClick={scrollToTop}
       className={`fixed bottom-20 right-10 p-3 bg-orange-600 text-white rounded-full shadow-md hover:bg-orange-400 transition-all ${
         isVisible ? "block" : "hidden"
       }`}
       aria-label="Scroll to top"
     >
       ▲
     </button>
   );
 };

 export default ScrollToTop;
