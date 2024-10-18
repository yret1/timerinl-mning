"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface FinishscreenProps {
  restart: () => void;
  timeInSeconds: number;
}

const Breakscreen: React.FC<FinishscreenProps> = ({
  restart,
  timeInSeconds,
}) => {
  const waveAnimation = {
    initial: {
      scale: 1,
      backgroundColor: "#000000",
    },
    animate: {
      scale: [1, 1.1, 1],
      backgroundColor: ["#000000", "#222222", "#000000"],
    },
  };

  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    setMinutes(Math.floor(timeInSeconds / 60));
    setSeconds(timeInSeconds % 60);
  }, [timeInSeconds]);

  const formatTime = (time: number): string => {
    return time.toString().padStart(2, "0");
  };

  const closeEndscreen = () => {
    restart();
  };

  useEffect(() => {
    const playSound = () => {
      const audio = new Audio("/pause.mp3");
      audio.play();
    };

    playSound();
  }, []);

  return (
    <section className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-landing overflow-hidden z-50">
      <motion.div
        className="w-[140vw] aspect-square rounded-full bg-slate-700 absolute flex justify-center items-center"
        variants={waveAnimation}
        initial="initial"
        animate="animate"
        transition={{
          duration: 5,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 1.2,
        }}
      >
        <motion.div
          className="w-[90vw] aspect-square rounded-full bg-slate-800 flex justify-center items-center"
          variants={waveAnimation}
          initial="initial"
          animate="animate"
          transition={{
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 0.8,
          }}
        >
          <motion.div
            className="w-[60vw] aspect-square rounded-full bg-slate-900 flex justify-center items-center"
            variants={waveAnimation}
            initial="initial"
            animate="animate"
            transition={{
              duration: 5,
              ease: "easeInOut",
              repeat: Infinity,
              delay: 0.4,
            }}
          >
            <motion.div
              className="w-[40vw] aspect-square rounded-full bg-slate-900 flex justify-center items-center"
              variants={waveAnimation}
              initial="initial"
              animate="animate"
              transition={{
                duration: 5,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            ></motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      <svg
        width="40"
        height="50"
        viewBox="0 0 40 50"
        fill="none"
        className="absolute z-50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="12" height="50" rx="6" fill="white" />
        <rect x="28" width="12" height="50" rx="6" fill="white" />
      </svg>

      <p className="absolute text-white font-sans text-5xl z-50 bottom-1/3">
        Pause & Breathe
      </p>
      <p className="text-white fixed bottom-40 z-50 font-sans text-4xl">
        {formatTime(minutes)}:{formatTime(seconds)}
      </p>

      <button
        onClick={closeEndscreen}
        className="fixed bottom-10 border-2 border-white text-white rounded-md px-6 py-2 text-opacity-60 border-opacity-60"
      >
        NO PAUSE, GO NOW!
      </button>
    </section>
  );
};

export default Breakscreen;
