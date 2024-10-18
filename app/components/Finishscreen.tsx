"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

interface FinishscreenProps {
  close: () => void;
}

const Finishscreen: React.FC<FinishscreenProps> = ({ close }) => {
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

  const bellShake = {
    initial: {
      rotate: 0,
    },
    animate: {
      rotate: [0, 10, -10, 10, -10, 0],
    },
  };

  const closeEndscreen = () => {
    close();
  };

  useEffect(() => {
    const playSound = () => {
      const audio = new Audio("/alert.mp3");
      audio.play();
    };

    playSound();

    const soundInterval = setInterval(() => {
      playSound();
    }, 2500);

    return () => clearInterval(soundInterval);
  }, []);

  return (
    <section className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-landing overflow-hidden z-50">
      <AnimatePresence>
        <motion.div
          className="w-[140vw] aspect-square rounded-full bg-slate-700 absolute flex justify-center items-center"
          variants={waveAnimation}
          initial="initial"
          animate="animate"
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
            delay: 0.6,
          }}
        >
          <motion.div
            className="w-[90vw] aspect-square rounded-full bg-slate-800 flex justify-center items-center"
            variants={waveAnimation}
            initial="initial"
            animate="animate"
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
              delay: 0.4,
            }}
          >
            <motion.div
              className="w-[60vw] aspect-square rounded-full bg-slate-900 flex justify-center items-center"
              variants={waveAnimation}
              initial="initial"
              animate="animate"
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
                delay: 0.2,
              }}
            >
              <motion.div
                className="w-[40vw] aspect-square rounded-full bg-slate-900 flex justify-center items-center"
                variants={waveAnimation}
                initial="initial"
                animate="animate"
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                  delay: 0,
                }}
              ></motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
      <motion.svg
        variants={bellShake}
        initial="initial"
        animate="animate"
        transition={{
          repeat: Infinity,
          duration: 0.5,
          repeatDelay: 2.15,
          ease: "anticipate",
        }}
        xmlns="http://www.w3.org/2000/svg"
        width="85"
        height="86"
        viewBox="0 0 85 86"
        fill="none"
        className="absolute"
      >
        <path
          d="M22.6833 0C22.4528 0 22.2799 0.0572776 22.107 0.114555C17.0934 2.00472 12.5409 4.98315 8.73751 8.7062C4.99175 12.4865 1.99514 17.0115 0.0934421 21.9946C-0.194694 22.7965 0.208696 23.6557 0.957849 23.942C1.707 24.2284 2.62904 23.8275 2.91717 23.0829C4.70361 18.5007 7.41209 14.3194 10.9273 10.8827C14.385 7.38881 18.5917 4.69677 23.2019 2.92116C24.0087 2.63477 24.3545 1.71833 24.0663 0.97372C23.8358 0.400943 23.2595 0 22.6833 0ZM62.2155 0C61.3511 0 60.7172 0.744609 60.7172 1.5465C60.7172 2.17655 61.1206 2.69205 61.6968 2.92116C66.307 4.69677 70.5138 7.38881 73.9714 10.8827C77.4867 14.3767 80.1951 18.5007 81.924 23.0829C82.2121 23.8848 83.0765 24.2857 83.8833 23.9993C84.6901 23.7129 85.0935 22.8538 84.8053 22.0519C84.8053 22.0519 84.8053 22.0519 84.8053 21.9946C82.9036 17.0115 79.907 12.4865 76.1612 8.7062C72.3579 4.92588 67.8053 2.00472 62.7918 0.114555C62.6189 0.0572776 62.446 0 62.2155 0ZM42.4494 11.341C38.8765 11.341 35.8799 14.2621 35.8799 17.8706C35.8799 19.4171 36.4562 20.7918 37.3782 21.9373C27.2934 24.2284 19.8019 33.1637 19.8019 43.8747V61.3443H19.2256C15.768 61.3443 12.9443 64.1509 12.9443 67.5876C12.9443 71.0243 15.768 73.8309 19.2256 73.8309H30.6934V74.1172C30.6934 80.1314 35.6494 85.0573 41.7002 85.0573C47.7511 85.0573 52.707 80.1314 52.707 74.1172V73.8309H65.7307C69.1884 73.8309 72.0121 71.0243 72.0121 67.5876C72.0121 64.1509 69.1307 61.2871 65.6731 61.2871H65.0968V43.8174C65.0968 33.1065 57.6053 24.1712 47.5206 21.8801C48.4426 20.7918 49.0189 19.3598 49.0189 17.8133C49.0189 14.2621 46.0799 11.341 42.4494 11.341Z"
          fill="white"
        />
      </motion.svg>
      <p className="absolute text-white font-sans text-5xl z-50 bottom-1/3">
        TIMES UP!
      </p>

      <button
        onClick={closeEndscreen}
        className="fixed bottom-10 border-2 border-white text-white rounded-md px-6 py-2 text-opacity-60 border-opacity-60"
      >
        SET NEW TIMER
      </button>
    </section>
  );
};

export default Finishscreen;
