import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="container mx-auto p-4" id="home">
        <div className="flex flex-wrap -mx-2">
          <div className="w-full md:w-1/2 px-2">
            <div className=" text-white p-4 rounded-lg">
              <h1 className="font-bold text-red-500 font-mono text-3xl mt-20">
                “In learning you will teach, and in teaching you will learn.”
              </h1>
              <p className="font-bold text-gray-900 pt-5">
                Self-learning is a powerful tool that enables individuals to
                grow beyond limitations. It fosters independence, critical
                thinking, and adaptability in a constantly evolving world.
                Unlike traditional education, self-learning allows one to
                explore topics at their own pace, driven by curiosity and
                passion. It builds confidence, enhances problem-solving skills,
                and encourages lifelong learning. In today's digital age,
                abundant resources like online courses, books, and tutorials
                make self-learning more accessible than ever. The ability to
                acquire knowledge independently is a key factor in personal and
                professional success. It cultivates resilience, creativity, and
                innovation, shaping individuals into self-sufficient thinkers.
                Embracing self-learning leads to continuous self-improvement and
                opens endless opportunities for growth.
              </p>
              <div className=" text-white p-4 rounded-lg flex flex-col items-center">
                <img
                  src="https://fairgaze.com/images/UploadedImages/thumbs/0294451_0294451_selfstudy600x314.jpg"
                  alt="Example Image"
                  className="w-100 h-50 object-cover rounded-lg mb-2"
                />
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-2">
            <div className=" text-white p-4 rounded-lg flex flex-col items-center">
              <img
                src="https://classplusapp.com/growth/wp-content/uploads/2022/05/How-to-Motivate-Students-for-Self-Study.jpg"
                alt="Example Image"
                className="w-150 h-150 object-cover rounded-lg mb-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
