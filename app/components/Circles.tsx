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
  const totalSeconds = startMinutes * 60;

  return (
    <section className="w-full h-full flex justify-center items-center relative">
      {Array.from({ length: startMinutes }).map((_, index) => {
        const size = ((index + 1) / startMinutes) * 100;

        return (
          <motion.section
            initial={{ backgroundColor: "#EEEEEE" }}
            animate={{ backgroundColor: "#222222" }}
            transition={{ duration: 60, delay: 60 * index }}
            key={index + "Circle"}
            className={`aspect-square rounded-full absolute border-2 border-primary`}
            style={{
              width: `${size}%`,
              zIndex: index,
            }}
          ></motion.section>
        );
      })}
    </section>
  );
};

export default Circles;
