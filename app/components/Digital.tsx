"use client";
import React, { useEffect, useState } from "react";

interface AnalogProps {
  secondsLeft: number;
}

const Digital: React.FC<AnalogProps> = ({ secondsLeft }) => {
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
      <p className="font-sans text-primary font-bold text-7xl">
        {formatTime(minutes)}:{formatTime(seconds)}
      </p>
    </section>
  );
};

export default Digital;
