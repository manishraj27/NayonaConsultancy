import React from 'react';

const TrustedBySection = () => {
  // Array of company logos (replace with actual image paths)
  const logos = [
    "https://banner2.cleanpng.com/20180816/pqy/474842f9870048b1c2b5eb21e3b8515d.webp",
    "https://banner2.cleanpng.com/20180816/pqy/474842f9870048b1c2b5eb21e3b8515d.webp",
    "https://banner2.cleanpng.com/20180816/pqy/474842f9870048b1c2b5eb21e3b8515d.webp",
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">
          Trusted by leading companies
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {logos.map((logo, index) => (
            <div key={index} className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img
                className="max-h-12 grayscale"
                src={logo}
                alt={`Company Logo ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedBySection;
