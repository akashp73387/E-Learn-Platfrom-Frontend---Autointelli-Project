import React from 'react';

const Content = () => {
    return (
      <div>
        <div className="container mx-auto p-4" id="about">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/2 px-2">
              <div className=" text-white p-4 rounded-lg flex flex-col items-center">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/025/442/511/non_2x/self-learning-online-education-e-book-distance-e-learning-skill-improvement-self-development-concept-goal-achieving-modern-flat-cartoon-style-illustration-on-white-background-vector.jpg"
                  alt="Example Image"
                  className="w-150 h-150 object-cover rounded-lg mb-2"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 px-2">
              <div className=" text-white p-4 rounded-lg">
                <h1 className="font-bold text-amber-400 font-mono text-2xl mt-20">
                  “The capacity to learn is a gift; the ability to learn is a
                  skill; the willingness to learn is a choice.”
                </h1>
                <p className="font-bold text-green-900 pt-5">
                  Self-learning is a lifelong journey that reflects one's inner
                  vision and growth. It depends on a person's curiosity and
                  determination. The ability to learn new things independently
                  determines how far one can progress. Books, online courses,
                  experiences, and approaches all contribute to learning.
                  However, true growth lies in continuous learning and applying
                  that knowledge in practice. With self-confidence and
                  persistence, self-learning can lead to remarkable success. 🚀
                </p>
                <div className=" text-white p-4 rounded-lg flex flex-col items-center">
                  <img
                    src="https://img.freepik.com/free-vector/hand-drawn-college-entrance-exam-illustration_23-2150359353.jpg"
                    alt="Example Image"
                    className="w-100 h-50 object-cover rounded-lg mb-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Content;