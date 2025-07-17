import React from "react";

import { HoverBorderGradient } from "../hover-border-gradient";

const GradientBorder = ({ Title }) => {
  return (
    <div className="text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-white bg-black text-white dark:text-black border-black flex items-center space-x-2 px-5 py-2  font-semibold"
      >
        <div className="flex flex-col">
          <span>{Title}</span>
        </div>
      </HoverBorderGradient>
    </div>
  );
};

export default GradientBorder;
