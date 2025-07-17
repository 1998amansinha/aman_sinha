import React from "react";
import Header from "./Header";
import TechStack from "./TechStack";

const Hero = () => {
  return (
    <div className="w-full h-full">
      <Header />
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center mt-14 mx-3 gap-8">
        {/* Left Section */}
        <div className="w-full lg:w-2/3 mt-10 lg:mt-28 text-center lg:text-left">
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[12rem] leading-tight lg:leading-none font-bold">
            Frontend Developer
          </h1>
          <div className="mt-10 lg:mt-20">
            <TechStack />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center lg:items-start gap-y-10 lg:gap-y-48">
          <img
            src="https://res.cloudinary.com/do5xzpecm/image/upload/v1752492757/MY_PHOTO_w9rraz.jpg"
            alt="Photo"
            className="w-40 sm:w-52 md:w-60 lg:w-64 rounded-2xl transition-all ease-in-out duration-300"
          />
          <div className="text-sm sm:text-base font-semibold text-neutral-500 text-center lg:text-left px-4 lg:px-0">
            <p>Hi, I'm Aman, A Frontend Developer, Turning</p>
            <p>wireframes into pixel-perfect, responsive</p>
            <p>websites — powered by React and Tailwind.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
