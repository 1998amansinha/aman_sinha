import { Facebook, Instagram } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white w-full rounded-t-md pt-10 pb-4 px-6 md:px-12">
      {/* Flex container */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo & Name */}
        <div className="text-center md:text-left">
          <h1 className="text-6xl md:text-9xl font-bold">as.</h1>
          <p className="text-lg md:text-xl font-medium">Aman Sinha</p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-x-5 mt-6 md:mt-32">
          <a
            href="https://www.instagram.com/amansinha796/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
          >
            <Instagram className="hover:text-pink-500 transition-colors duration-300" />
          </a>
          <a
            href="https://www.facebook.com/aman.sinha.333058/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook Profile"
          >
            <Facebook className="hover:text-blue-500 transition-colors duration-300" />
          </a>
        </div>

        {/* Contact Section */}
        <div className="text-center md:text-right">
          <div className="mb-4">
            <h2 className="text-lg font-semibold">Email Address</h2>
            <a
              href="mailto:amansinha1998@outlook.com"
              className="block hover:underline"
              aria-label="Send email to Aman"
            >
              amansinha1998@outlook.com
            </a>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Phone Number</h2>
            <a
              href="tel:+918083937600"
              className="block hover:underline"
              aria-label="Call Aman"
            >
              +91 8083937600
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-center text-sm mt-10 opacity-60">
        © {new Date().getFullYear()} Aman Sinha. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
