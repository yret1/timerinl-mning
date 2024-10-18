"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Nav = () => {
  const navItems = [
    "ANALOG TIMER",
    "DIGITAL TIMER",
    "VISUAL TIMER",
    "TEXT TIMER",
    "CIRCLES TIMER",
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="w-full p-4 flex justify-start relative items-center">
      <button
        className="absolute top-5 left-5 z-50"
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
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="top-0 left-0 absolute z-40 w-screen h-screen bg-landing pt-32 text-bg"
          >
            <ul className="w-screen flex flex-col justify-center items-center gap-4 h-full font-sans text-2xl font-bold">
              {navItems.map((item, index) => (
                <li key={index}>
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
