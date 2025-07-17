import React, { useState } from "react";
import { ArrowDownToLine, Menu, X } from "lucide-react";
import LayoutAnimation from "./shared/LayoutAnimation";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex justify-between items-center m-3">
      {/* Logo */}
      <div>
        <h1 className="font-bold text-4xl">as.</h1>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-x-6 mr-4 font-dm-sans">
        <p className="cursor-pointer">Experience</p>
        <p className="cursor-pointer">Projects</p>
        <p className="cursor-pointer">Contact</p>
      </div>

      {/* Resume Button */}
      <div className="md:flex items-center gap-6">
        <a
          href="https://drive.google.com/file/d/1X-a3LM1iUWj-2fijMGH08yZj271nuaTd/view?usp=drive_link" // path to your resume
          download="Aman_Sinha_Resume.pdf"
          className="button flex gap-x-1 items-center"
        >
          Resume <ArrowDownToLine />
        </a>
      </div>
    </div>
  );
};

export default Header;
