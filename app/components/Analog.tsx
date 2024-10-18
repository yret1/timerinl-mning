"use client";
import React, { useEffect, useState } from "react";

interface AnalogProps {
  secondsLeft: number;
}

const Analog: React.FC<AnalogProps> = ({ secondsLeft }) => {
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    setMinutes(Math.floor(secondsLeft / 60));
    setSeconds(secondsLeft % 60);
  }, [secondsLeft]);

  const formatTime = (time: number): string => {
    return time.toString().padStart(2, "0");
  };

  return (
    <section className="h-full w-full flex justify-center items-center">
      <section className="w-11/12 aspect-square rounded-full relative flex justify-center items-center">
        {Array.from({ length: 30 }).map((_, index) => {
          const isFifth = index % 5 === 0;
          return (
            <section
              style={{ transform: `rotate(${index * 12}deg)` }}
              key={index}
              className="w-full flex absolute justify-between items-center"
            >
              <div
                className={`bg-primary rounded-full ${
                  isFifth ? "w-4 h-2" : "w-2 h-2"
                }`}
              ></div>
              <div
                className={`bg-primary rounded-full ${
                  isFifth ? "w-4 h-2" : "w-2 h-2"
                }`}
              ></div>
            </section>
          );
        })}

        <section
          id="Watchguide"
          className="w-4 h-4 bg-primary rounded-full "
        ></section>
      </section>
    </section>
  );
};

export default Analog;
