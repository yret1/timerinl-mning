"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const Circles = ({
  secondsLeft,
  startMinutes,
}: {
  secondsLeft: number;
  startMinutes: number;
}) => {
  const [minutes, setMinutes] = useState<number>(0);

  useEffect(() => {
    setMinutes(Math.ceil(secondsLeft / 60));
  }, [secondsLeft]);

  return (
    <section className="w-full aspect-square flex justify-center items-center relative">
      {Array.from({ length: startMinutes }).map((_, index) => {
        const size = ((index + 1) / startMinutes) * 100;

        // Circle states
        const isCompleted = index < startMinutes - minutes;
        const isActive = index === startMinutes - minutes;
        const isFuture = index > startMinutes - minutes;

        // Reversing zIndex
        const reversedZIndex = (startMinutes - index) * 2;

        return (
          <motion.section
            key={index + "Circle"}
            id={index + "Circle"}
            className={`aspect-square rounded-full z-[${reversedZIndex}] absolute border-2 border-primary ${
              isCompleted ? "bg-[#93C5FD]" : ""
            } ${isActive ? "activecircle" : ""} ${isFuture ? "bg-white" : ""}`} // Active circle gets 'activecircle animation', future circles stay white
            style={{
              width: `${size}%`,
              zIndex: reversedZIndex, // Apply reversed zIndex
            }}
          ></motion.section>
        );
      })}
    </section>
  );
};

export default Circles;
