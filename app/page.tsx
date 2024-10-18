"use client";

import { motion } from "framer";
import Link from "next/link";
export default function Home() {
  return (
    <section className="bg-landing w-screen h-screen flex justify-center items-center">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex justify-center items-center flex-col gap-2"
      >
        <Link
          href={"/timermain"}
          className="flex justify-center items-center flex-col gap-2"
        >
          <svg
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
              fill="white"
            />
            <rect
              x="20.5"
              y="35"
              width="8"
              height="35"
              transform="rotate(-180 20.5 35)"
              fill="white"
            />
            <rect
              x="9.5"
              y="35"
              width="4"
              height="35"
              transform="rotate(-180 9.5 35)"
              fill="white"
            />
            <rect
              x="2.5"
              y="35"
              width="2"
              height="35"
              transform="rotate(-180 2.5 35)"
              fill="white"
            />
          </svg>

          <p className="text-2xl font-bold font-right">INTERVAL</p>
        </Link>
        <p className="font-sans tracking-wide">For all your timing needs</p>
      </motion.section>
    </section>
  );
}
