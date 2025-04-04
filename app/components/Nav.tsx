"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavProps {
  setType: React.Dispatch<
    React.SetStateAction<"Analog" | "Digital" | "Text" | "Circle">
  >;
  typeCurrent: "Analog" | "Digital" | "Text" | "Circle";
}

const Nav: React.FC<NavProps> = ({ setType, typeCurrent }) => {
  const navItems = [
    "ANALOG TIMER",
    "DIGITAL TIMER",
    "TEXT TIMER",
    "CIRCLE TIMER",
  ];

  const type = ["Analog", "Digital", "Text", "Circle"];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const updateClocktype = (index: number) => {
    setType(type[index] as "Analog" | "Digital" | "Text");
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full p-4 flex justify-end relative items-center">
      <button
        className="fixed top-5 left-5 z-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          className={`-rotate-90 ${
            isMenuOpen ? "fill-bg" : "fill-black"
          } transition-all`}
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="35"
          viewBox="0 0 36 35"
          fill="none"
        >
          <rect
            x="35.5"
            y="35"
            width="12"
            height="35"
            transform="rotate(-180 35.5 35)"
          />
          <rect
            x="20.5"
            y="35"
            width="8"
            height="35"
            transform="rotate(-180 20.5 35)"
          />
          <rect
            x="9.5"
            y="35"
            width="4"
            height="35"
            transform="rotate(-180 9.5 35)"
          />
          <rect
            x="2.5"
            y="35"
            width="2"
            height="35"
            transform="rotate(-180 2.5 35)"
          />
        </svg>
      </button>
      <p className="text-primary font pt-2 px-5 font-bold text-2xl">
        {typeCurrent.toLocaleUpperCase() + " DISPLAY"}
      </p>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="top-0 left-0 fixed z-40 w-screen h-screen bg-landing pt-32 text-bg"
          >
            <ul className="w-screen flex flex-col justify-center items-center gap-4 h-full font-sans text-2xl font-bold">
              {navItems.map((item, index) => (
                <li
                  onClick={() => updateClocktype(index as 0 | 1 | 2)}
                  key={index}
                >
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Nav;
