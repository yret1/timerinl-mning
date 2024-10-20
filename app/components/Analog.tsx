import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface AnalogProps {
  startMinutes: number;
  secondsLeft: number;
}

const Analog: React.FC<AnalogProps> = ({ startMinutes, secondsLeft }) => {
  const [secondRotation, setSecondRotation] = useState<number>(0);
  const [minuteRotation, setMinuteRotation] = useState<number>(0);
  const prevSecondRotation = useRef<number>(0);
  useEffect(() => {
    const totalSeconds = startMinutes * 60;
    const elapsedSeconds = totalSeconds - secondsLeft;

    let newSecondRotation = elapsedSeconds * 6;

    // Lös reset problemet genom att fortsatt öka rotationen
    if (
      newSecondRotation < prevSecondRotation.current &&
      prevSecondRotation.current > 354
    ) {
      newSecondRotation += 360;
    }

    setSecondRotation(newSecondRotation);
    prevSecondRotation.current = newSecondRotation;

    // Minute
    const minutesLeft = Math.ceil(secondsLeft / 60);
    const minuteProgress = (startMinutes - minutesLeft) / startMinutes;
    const minutesRotation = minuteProgress * 360;
    setMinuteRotation(minutesRotation);
  }, [secondsLeft, startMinutes]);

  return (
    <section className="h-full w-full flex justify-center items-center">
      <section className="w-11/12 aspect-square rounded-full relative flex justify-center items-center">
        {/* Render dots for each minute, including 0 */}
        {Array.from({ length: startMinutes + 1 }).map((_, index) => (
          <section
            style={{
              transform: `rotate(${index * (360 / startMinutes)}deg)`,
            }}
            key={index}
            className="h-full flex absolute justify-center items-start"
          >
            <div className="w-2 h-2 bg-primary rounded-full"></div>
          </section>
        ))}

        <motion.section
          id="Seconds"
          style={{ rotate: `${secondRotation}deg` }}
          className="w-6 h-6 bg-primary rounded-full relative flex justify-center items-center transition-all"
        ></motion.section>
        <motion.section
          id="Minutes"
          style={{ rotate: `${minuteRotation}deg` }}
          className="w-4 h-4 bg-slate-700 rounded-full absolute transition-all"
        ></motion.section>
      </section>
    </section>
  );
};

export default Analog;
