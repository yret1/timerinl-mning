"use client";

import { useCallback, useEffect, useState } from "react";
import Toggles from "../components/Toggles";
import Nav from "../components/Nav";
import Analog from "../components/Analog";
import Finishscreen from "../components/Finishscreen";
import Digital from "../components/Digital";

const Page = () => {
  const [minutes, setMinutes] = useState<number>(10);
  const [timerActive, setTimerActive] = useState<boolean>(false);
  const [isInterval, setIsInterval] = useState<boolean>(false);
  const [breackActive, setBreakActive] = useState<boolean>(false);
  const [timerType, setTimerType] = useState<"Analog" | "Digital" | "Text">(
    "Analog"
  );
  const [timerFinished, setTimerFinished] = useState<boolean>(false);
  const [timeInSeconds, setTimeInSeconds] = useState<number>(minutes * 60);

  const startTimer = useCallback(() => {
    if (timerActive) {
      setTimerActive(false);
      setTimeInSeconds(minutes * 60);
    } else {
      setTimerActive(true);
      setTimerFinished(false);
    }
  }, [timerActive, minutes]);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (timerActive && timeInSeconds > 0) {
      interval = setInterval(() => {
        setTimeInSeconds((prev) => prev - 1);
      }, 1000);
    } else if (timeInSeconds === 0) {
      setTimerFinished(true);
      setTimerActive(false);
    }

    return () => clearInterval(interval);
  }, [timerActive, timeInSeconds]);

  useEffect(() => {
    setTimeInSeconds(minutes * 60);
  }, [minutes]);

  const changeMinutes = (type: string) => {
    if (type === "increment") {
      setMinutes(minutes + 5);
    } else {
      if (minutes > 0) {
        setMinutes(minutes - 5);
      } else {
        setMinutes(0);
      }
    }
  };

  const closeEndscreen = () => {
    setTimerFinished(false);
    setTimerActive(false);
  };

  return (
    <>
      <Nav setType={setTimerType} />

      <section className="w-screen min-h-screen flex flex-col justify-center items-center pb-20 bg-bg p-10">
        {!timerActive && !timerFinished && (
          <section className="flex w-full gap-1 justify-center flex-col items-center">
            <section className="flex justify-between items-center gap-2 w-full">
              <svg
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
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p className="text-primary font-sans text-7xl font-bold">
                {minutes}
              </p>
              <svg
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
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </section>
            <p className="font-sans text-primary text-opacity-60 text-lg">
              minutes
            </p>

            <section className="w-10/12 fixed bottom-20 py-20 flex flex-col gap-5">
              <Toggles
                text="Intervals"
                active={isInterval}
                onClick={setIsInterval}
              />
              <Toggles
                text="5 min break / interval"
                active={breackActive}
                onClick={setBreakActive}
              />
            </section>
          </section>
        )}
        {timerActive && timerType === "Analog" ? (
          <Analog secondsLeft={timeInSeconds} />
        ) : timerType === "Digital" && timerActive ? (
          <Digital secondsLeft={timeInSeconds} />
        ) : null}

        {timerFinished && <Finishscreen close={closeEndscreen} />}
        <section className="w-10/12 fixed bottom-10 flex justify-center items-center">
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
        </section>
      </section>
    </>
  );
};

export default Page;
