import React from "react";

const CardGrid = () => {
  const images = [
    "https://www.guvi.in/assets/Df40G6-P-zoho.webp",
    "https://www.guvi.in/assets/BCqZ5u0O-lenovo.webp",
    "https://www.guvi.in/assets/BeM-RDUa-amazon.webp",
    "https://www.guvi.in/assets/FJ_EISf5-infosys.webp",
    "https://www.guvi.in/assets/daYTQfl9-larsen.webp",
    "https://www.guvi.in/assets/CkpaIRuZ-accenture.webp",
    "https://www.guvi.in/assets/C7IirAO9-cartoon-mango.webp",
    "https://www.guvi.in/assets/BT5qwU2l-ideas.webp",
    "https://www.guvi.in/assets/fQGtF5GR-siemens.webp",
    "https://www.guvi.in/assets/CtP46enr-tcs.webp",
    "https://www.guvi.in/assets/W20CtA9i-cognizant.webp",
    "https://www.guvi.in/assets/B8GyixhV-paypal.webp",
    "https://www.guvi.in/assets/D9Q13NB9-virtusa.webp",
    "https://www.guvi.in/assets/D18imoH7-klenty.webp",
    "https://www.guvi.in/assets/ULW7USSC-tech-mahindra.webp",
    "https://www.guvi.in/assets/ByDjBcTe-grappus.webp",
    "https://www.guvi.in/assets/C4UufyUF-capgemini.webp",
    "https://www.guvi.in/assets/E1isD1M--jll.webp",
    "https://www.guvi.in/assets/cH9Hp9oG-ibm.webp",
    "https://www.guvi.in/assets/C7gjAANj-thoughtworks.webp",
    "https://www.guvi.in/assets/Dr0tIfCe-caratlane.webp",
    "https://www.guvi.in/assets/C7gjAANj-thoughtworks.webp",
    "https://www.guvi.in/assets/BDotq-vn-fiserv.webp",
    "https://www.guvi.in/assets/CTuGUd6k-comcast.webp",
  ];

  return (
    <div className="container mx-auto p-6">
      {/* Headline */}
      <h2 className="text-2xl font-mono font-bold text-center mb-6 text-black">
        Where Do Our Students Work?
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-12 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="col-span-1 transform transition duration-500 ease-in-out hover:scale-110 animate-fadeIn"
          >
            <img
              src={img}
              alt={`Company ${index + 1}`}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
