import React from "react";
import GradientBorder from "./shared/ui/GradientBorder";
import { ExternalLink } from "lucide-react";
import socialLinks from "../constants/socialLinks";

const Contact = () => {
  return (
    <div className="px-4 sm:px-6 py-8 sm:py-10">
      <GradientBorder Title={"Contact"} />

      <div className="my-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        {/* Heading section */}
        <div className="text-4xl sm:text-5xl md:text-9xl leading-tight font-bold text-start md:text-left">
          <h1>Let’s Connect</h1>
          <h1>There</h1>
        </div>

        {/* Mail and phone section */}
        <div className="md:w-1/3 w-full text-start">
          <h1 className="text-base sm:text-lg text-gray-500 mb-2">
            Leave a message at
          </h1>
          <a
            href="mailto:amansinha1998@outlook.com"
            className="flex items-center underline text-xl sm:text-2xl md:text-3xl cursor-pointer mb-8 gap-2 flex-wrap"
          >
            amansinha1998@outlook.com <ExternalLink />
          </a>

          <h1 className="text-base sm:text-lg text-gray-500 mb-2">
            Give me a call at
          </h1>
          <a
            href="tel:+918083937600"
            className="flex items-center underline text-xl sm:text-2xl md:text-3xl cursor-pointer gap-x-3"
          >
            <img
              src="https://res.cloudinary.com/do5xzpecm/image/upload/v1752732833/27130_wtmlgk.jpg"
              alt="India Flag"
              className="w-7 sm:w-8 md:w-10 object-cover"
            />
            +91 8083937600
          </a>
        </div>
      </div>

      {/* Social links section */}
      <div className="text-center mt-10">
        <h1 className="text-xl sm:text-2xl mb-6">Find my social profiles</h1>
        <div className="flex flex-wrap justify-center items-center gap-6 my-8">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group transition-transform duration-200 hover:scale-110"
              title={item.name}
              aria-label={item.name}
            >
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 whitespace-nowrap">
                {item.name}
              </span>
              <img
                src={item.image}
                alt={item.name}
                className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
