"use client";

import { useCallback, useEffect, useState } from "react";
import Toggles from "../components/Toggles";
import Nav from "../components/Nav";
import Analog from "../components/Analog";
import Finishscreen from "../components/Finishscreen";
import Digital from "../components/Digital";
import Text from "../components/Text";
import Breakscreen from "../components/Breakscreen";
import { motion } from "framer-motion";

const Page = () => {
  const [minutes, setMinutes] = useState<number>(5);
  const [timerActive, setTimerActive] = useState<boolean>(false);
  const [isInterval, setIsInterval] = useState<boolean>(false);
  const [breakActive, setBreakActive] = useState<boolean>(false);
  const [timerType, setTimerType] = useState<"Analog" | "Digital" | "Text">(
    "Text"
  );
  const [timerFinished, setTimerFinished] = useState<boolean>(false);
  const [timeInSeconds, setTimeInSeconds] = useState<number>(minutes * 60);
  const [intervalTime, setIntervalTime] = useState<number>(5);

  const startTimer = useCallback(() => {
    if (timerActive) {
      setTimerActive(false);
      setTimeInSeconds(minutes * 60);
    } else {
      setTimerActive(true);
      setBreakActive(false);
      setTimerFinished(false);
      setTimeInSeconds(minutes * 60);
    }
  }, [timerActive, minutes]);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (timerActive && timeInSeconds > 0) {
      interval = setInterval(() => {
        setTimeInSeconds((prev) => prev - 1);
      }, 1000);
    } else if (timeInSeconds === 0) {
      if (isInterval) {
        if (breakActive && timeInSeconds === 0) {
          setBreakActive(false);
          setTimerActive(true);
          setTimeInSeconds(minutes * 60);
          const playSound = () => {
            const audio = new Audio("/pause.mp3");
            audio.play();
          };

          playSound();
          startTimer();
        }

        setBreakActive(true);
        setTimerActive(false);
        setTimeInSeconds(intervalTime * 60);
      } else {
        setTimerFinished(true);
        setTimerActive(false);
        setTimeInSeconds(minutes * 60);
      }
    }
    if (breakActive && timeInSeconds > 0) {
      interval = setInterval(() => {
        setTimeInSeconds((prev) => prev - 1);
      }, 1000);
    } else if (breakActive && timeInSeconds === 0) {
      setBreakActive(false);
      setTimerActive(true);
      setTimeInSeconds(minutes * 60); // set time to minutes user selected
    }

    return () => clearInterval(interval); //Cleanup intervals
  }, [timerActive, breakActive, timeInSeconds, isInterval, intervalTime]);

  useEffect(() => {
    setIntervalTime(5);
    if (minutes !== 0) {
      setTimeInSeconds(minutes * 60);
    }
  }, [minutes]);

  const changeMinutes = (type: string) => {
    if (type === "increment") {
      if (minutes < 60) {
        setMinutes(minutes + 5);
      } else {
        alert("Max time is 60 minutes");
      }
    } else {
      if (minutes > 5) {
        setMinutes(minutes - 5);
      } else {
        alert("Min time is 5 minutes");
      }
    }
  };

  const closeEndscreen = () => {
    setTimerFinished(false);
    setTimerActive(false);
  };

  return (
    <>
      <Nav typeCurrent={timerType} setType={setTimerType} />

      <section className="w-screen min-h-screen flex flex-col justify-center items-center pb-20 bg-bg p-10">
        {!timerActive && !timerFinished && (
          <motion.section
            layout
            className="flex w-full gap-1 justify-center flex-col items-center"
          >
            <section className="flex justify-between items-center gap-2 w-full">
              <motion.svg
                initial={{ x: -200, rotate: 180 }}
                animate={{ x: 0, rotate: 180 }}
                onClick={() => changeMinutes("decrement")}
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                className="rotate-180"
                fill="none"
              >
                <path
                  d="M17.25 37.5L30.75 24L17.25 10.5"
                  stroke="#222222"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>

              <motion.p
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-primary font-sans text-7xl font-bold"
              >
                {minutes}
              </motion.p>
              <motion.svg
                initial={{ x: 200 }}
                animate={{ x: 0 }}
                onClick={() => changeMinutes("increment")}
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M17.25 37.5L30.75 24L17.25 10.5"
                  stroke="#222222"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </section>
            <motion.p
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="font-sans text-primary text-opacity-60 text-lg"
            >
              minutes
            </motion.p>

            <section className="w-10/12 fixed bottom-20 py-20 flex flex-col gap-5">
              <Toggles
                text="Intervals"
                active={isInterval}
                onClick={setIsInterval}
                delay={0.2}
              />
              <Toggles
                text="5 min break / interval"
                active={isInterval}
                onClick={setIsInterval}
                delay={0.3}
              />
            </section>
          </motion.section>
        )}
        {timerActive && timerType === "Analog" ? (
          <Analog secondsLeft={timeInSeconds} startMinutes={minutes} />
        ) : timerType === "Digital" && timerActive ? (
          <Digital secondsLeft={timeInSeconds} />
        ) : timerType === "Text" && timerActive ? (
          <Text secondsLeft={timeInSeconds} />
        ) : null}

        {timerFinished && minutes !== 0 && (
          <Finishscreen close={closeEndscreen} />
        )}
        {!timerFinished && breakActive && (
          <Breakscreen timeInSeconds={timeInSeconds} restart={startTimer} />
        )}
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.5,
          }}
          className="w-10/12 fixed bottom-10 flex justify-center items-center"
        >
          <button
            onClick={() => startTimer()}
            className={` ${
              timerActive
                ? "w-6/12 border-opacity-60 text-opacity-60 py-2 font-bold"
                : "w-full py-3 font-bold"
            }   rounded-lg text-primary border-2 border-primary text-2xl  font-sans transition-all`}
          >
            {timerActive ? "ABORT TIMER" : "START TIMER"}
          </button>
        </motion.section>
      </section>
    </>
  );
};

export default Page;
