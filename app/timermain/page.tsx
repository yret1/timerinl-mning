"use client";

import { useState } from "react";

const Page = () => {
  const [minutes, setMinutes] = useState<number>(10);
  const [timerActive, setTimerActive] = useState<boolean>(true);

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

  return (
    <section className="w-screen min-h-screen flex flex-col justify-end items-center pb-20 bg-bg p-10">
      {!timerActive && (
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
        </section>
      )}
      <section className="w-full flex justify-center items-center">
        <button
          onClick={() => setTimerActive(!timerActive)}
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
  );
};

export default Page;
