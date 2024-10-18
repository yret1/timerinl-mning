"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface AnalogProps {
  secondsLeft: number;
  startMinutes: number;
}

const Analog: React.FC<AnalogProps> = ({ startMinutes }) => {
  const [startingMinutes, setStartingMinutes] = useState<number>(0);

  useEffect(() => {
    setStartingMinutes(startMinutes);
  }, [startMinutes]);

  return (
    <section className="h-full w-full flex justify-center items-center">
      <section className="w-11/12 aspect-square rounded-full relative flex justify-center items-center">
        {/* Render dots for each minute */}
        {startingMinutes > 0 &&
          Array.from({ length: startingMinutes }).map((_, index) => {
            return (
              <section
                style={{
                  transform: `rotate(${index * (360 / startMinutes)}deg)`,
                }}
                key={index}
                className="h-full flex absolute justify-center items-start"
              >
                <div className={`bg-primary rounded-full ${"w-2 h-2"}`}></div>
              </section>
            );
          })}

        <motion.section
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          id="Seconds"
          className="w-6 h-6 bg-primary rounded-full relative flex justify-center items-center"
        ></motion.section>
        <motion.section
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 60 * startMinutes, ease: "linear" }}
          id="Minutes"
          className="w-4 h-4 bg-slate-700 rounded-full absolute"
        ></motion.section>
      </section>
    </section>
  );
};

export default Analog;
