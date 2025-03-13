import React from "react";

const UserData = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-6 font-mono">
        We Are Proud Of . . .
      </h2>
      <div className="flex flex-wrap -mx-2">
        <div className="w-full sm:w-1/2 md:w-1/4 px-2">
          <div className="bg-gray-500 text-white p-4 rounded-lg text-center font-bold mb-2">
            <h1 className="text-4xl">159346</h1>
            <p>leaners</p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 px-2">
          <div className="bg-gray-500 text-white p-4 rounded-lg text-center font-bold  mb-2">
            <h1 className="text-4xl">16</h1>
            <p>Mentors</p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 px-2">
          <div className="bg-gray-500 text-white p-4 rounded-lg text-center font-bold  mb-2">
            <h1 className="text-4xl">159000</h1>
            <p>Lines of Code</p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 px-2">
          <div className="bg-gray-500 text-white p-4 rounded-lg text-center font-bold  mb-2">
            <h1 className="text-4xl">1546</h1>
            <p>Videos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserData;
