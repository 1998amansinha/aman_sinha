"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils"; // or replace with `clsx` if you're not using `cn`

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1,
  clockwise = true,
  ...props
}) {
  const [hovered, setHovered] = useState(false);
  const [direction, setDirection] = useState("TOP");

  const rotateDirection = (currentDirection) => {
    const directions = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex = clockwise
      ? (currentIndex - 1 + directions.length) % directions.length
      : (currentIndex + 1) % directions.length;
    return directions[nextIndex];
  };

  // 👇 Updated black gradient borders
  const movingMap = {
    TOP: "radial-gradient(20.7% 50% at 50% 0%, black 0%, rgba(0, 0, 0, 0) 100%)",
    LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, black 0%, rgba(0, 0, 0, 0) 100%)",
    BOTTOM:
      "radial-gradient(20.7% 50% at 50% 100%, black 0%, rgba(0, 0, 0, 0) 100%)",
    RIGHT:
      "radial-gradient(16.2% 41.2% at 100% 50%, black 0%, rgba(0, 0, 0, 0) 100%)",
  };

  const highlight =
    "radial-gradient(75% 181% at 50% 50%, black 0%, rgba(0, 0, 0, 0) 100%)";

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prev) => rotateDirection(prev));
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [hovered]);

  return (
    <Tag
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex justify-center items-center overflow-visible p-px w-fit transition duration-500 bg-black/20 hover:bg-black/10 rounded-full",
        containerClassName
      )}
      {...props}
    >
      {/* Button Content */}
      <div
        className={cn(
          "z-10 bg-black text-white px-6 py-3 rounded-[inherit]",
          className
        )}
      >
        {children}
      </div>

      {/* Animated background */}
      <motion.div
        className="absolute inset-0 z-0 rounded-[inherit]"
        style={{
          filter: "blur(2px)",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered
            ? [movingMap[direction], highlight]
            : movingMap[direction],
        }}
        transition={{ ease: "linear", duration }}
      />

      {/* 👇 Static Black Border Outline */}
      <div className="absolute inset-0 z-10 pointer-events-none rounded-sm" />
    </Tag>
  );
}
