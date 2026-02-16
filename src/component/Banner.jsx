import React from "react";

const Banner = () => {
  return (
    <div className="bg-teal-900 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white sm:text-5xl mb-6">
            Digital <span className="text-orange-500">Yatra</span>
          </h2>
          <p className="text-xl text-white font-medium mb-2">
            Your dream in tech, our journey together
          </p>
          <p className="text-xl text-white font-medium">
            Young minds, digital drive — let's move forward as one!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
