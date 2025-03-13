 import React, { useState } from "react";

 const CardPrice = () => {
   const courses = [
     {
       title: "JavaScript Basics",
       image:
         "https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg?tx=w_1920,q_auto",
       description: "Learn the fundamentals of JavaScript.",
       price: "$29.99",
       rating: 4.5,
     },
     {
       title: "React for Beginners",
       image:
         "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F096baapsqqt9fks0us99.png",
       description: "Build dynamic UIs with React.",
       price: "$39.99",
       rating: 4.7,
     },
     {
       title: "Node.js Masterclass",
       image:
         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo5rLh0Ed_H4b8ZM08EK6JZ1gBjVYVDmfmRQ&s",
       description: "Backend development with Node.js.",
       price: "$49.99",
       rating: 4.8,
     },
     {
       title: "Full-Stack Development",
       image:
         "https://www.mindinventory.com/blog/wp-content/uploads/2022/10/full-stack1200.png",
       description: "Master frontend and backend technologies.",
       price: "$59.99",
       rating: 5.0,
     },
     {
       title: "Python for Beginners",
       image:
         "https://webandcrafts.com/_next/image?url=https%3A%2F%2Fadmin.wac.co%2Fuploads%2FFeatures_Of_Python_1_f4ccd6d9f7.jpg&w=4500&q=90",
       description: "Start coding with Python.",
       price: "$34.99",
       rating: 4.6,
     },
     {
       title: "Advanced Java",
       image:
         "https://media.geeksforgeeks.org/wp-content/uploads/20230823152056/What-is-Advance-JAVA.png",
       description: "Master Java programming.",
       price: "$44.99",
       rating: 4.9,
     },
     {
       title: "Django Web Development",
       image:
         "https://miro.medium.com/v2/resize:fit:1400/1*HVKOLLX7wprRbHTl2IPDcQ.png",
       description: "Learn Django for full-stack apps.",
       price: "$54.99",
       rating: 4.7,
     },
     {
       title: "C++ Fundamentals",
       image:
         "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
       description: "Learn C++ programming.",
       price: "$39.99",
       rating: 4.8,
     },
     {
       title: "Machine Learning Basics",
       image:
         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG-zzuBreoX1IS_kZrsZEayljna_GUxyIItw&s",
       description: "Explore AI and ML fundamentals.",
       price: "$69.99",
       rating: 5.0,
     },
     {
       title: "Swift for iOS Development",
       image: "https://developer.apple.com/swift/images/swift-og.png",
       description: "Start iOS development with Swift.",
       price: "$49.99",
       rating: 4.7,
     },
     {
       title: "Cybersecurity Essentials",
       image:
         "https://www.financialexpress.com/wp-content/uploads/2022/10/1-94.jpg?w=440",
       description: "Understand the fundamentals of cybersecurity.",
       price: "$79.99",
       rating: 4.6,
     },
     {
       title: "Blockchain & Web3 Development",
       image:
         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6wuUTc3n_OZpzgsPNuNTkhFU49p9WEnLE3w&s",
       description: "Learn blockchain and Web3 concepts.",
       price: "$99.99",
       rating: 5.0,
     },
   ];

   const [showAll, setShowAll] = useState(false);

   const displayedCourses = showAll ? courses : courses.slice(0, 4);

   return (
     <div className="container mx-auto p-4" id="services">
       <h2 className="text-2xl font-mono font-bold text-center mb-6 text-black">
         Coding Courses
       </h2>

       {/* Responsive Grid Layout */}
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
         {displayedCourses.map((course, index) => (
           <div
             key={index}
             className="p-4 rounded-lg text-center shadow-lg bg-white border border-gray-300"
           >
             <img
               src={course.image}
               alt={course.title}
               className="w-full h-40 object-cover rounded-lg mb-3"
             />
             <h3 className="text-lg font-semibold text-black">
               {course.title}
             </h3>
             <p className="text-gray-700">{course.description}</p>

             {/* Rating */}
             <div className="flex justify-center items-center my-2">
               <span className="text-black text-sm">⭐ {course.rating}</span>
             </div>

             {/* Price */}
             <p className="text-lg font-bold text-black">{course.price}</p>

             {/* Add to Cart Button */}
             <button className="mt-3 bg-black text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-300">
               Add to Cart
             </button>
           </div>
         ))}
       </div>

       {/* View More / View Less Button */}
       <div className="text-center mt-6">
         <button
           onClick={() => setShowAll(!showAll)}
           className="bg-gray-800 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-700 transition duration-300"
         >
           {showAll ? "View Less" : "View More"}
         </button>
       </div>
     </div>
   );
 };

 export default CardPrice;
