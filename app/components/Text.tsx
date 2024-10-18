"use client";
import React, { useEffect, useState } from "react";

interface AnalogProps {
  secondsLeft: number;
}

const Text: React.FC<AnalogProps> = ({ secondsLeft }) => {
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    setMinutes(Math.floor(secondsLeft / 60));
    setSeconds(secondsLeft % 60);
  }, [secondsLeft]);

  const numberToSwedish = (num: number): string => {
    const swedishNumbers: { [key: number]: string } = {
      0: "Noll",
      1: "En",
      2: "Två",
      3: "Tre",
      4: "Fyra",
      5: "Fem",
      6: "Sex",
      7: "Sju",
      8: "Åtta",
      9: "Nio",
      10: "Tio",
      11: "Elva",
      12: "Tolv",
      13: "Tretton",
      14: "Fjorton",
      15: "Femton",
      16: "Sexton",
      17: "Sjutton",
      18: "Arton",
      19: "Nitton",
      20: "Tjugo",
      21: "Tjugoett",
      22: "Tjugotvå",
      23: "Tjugotre",
      24: "Tjugofyra",
      25: "Tjugofem",
      26: "Tjugosex",
      27: "Tjugosju",
      28: "Tjugoåtta",
      29: "Tjugonio",
      30: "Trettio",
      31: "Trettioett",
      32: "Trettiotvå",
      33: "Trettiotre",
      34: "Trettiofyra",
      35: "Trettiofem",
      36: "Trettiosex",
      37: "Trettiosju",
      38: "Trettioåtta",
      39: "Trettionio",
      40: "Fyrtio",
      41: "Fyrtioett",
      42: "Fyrtiotvå",
      43: "Fyrtiotre",
      44: "Fyrtiofyra",
      45: "Fyrtiofem",
      46: "Fyrtiosex",
      47: "Fyrtiosju",
      48: "Fyrtioåtta",
      49: "Fyrtionio",
      50: "Femtio",
      51: "Femtioett",
      52: "Femtiotvå",
      53: "Femtiotre",
      54: "Femtiofyra",
      55: "Femtiofem",
      56: "Femtiosex",
      57: "Femiosju",
      58: "Femioåtta",
      59: "Femtionio",
      60: "Sextio",
    };
    return swedishNumbers[num];
  };

  // Format the remaining time in Swedish
  const formatTimeToSwedish = (): string => {
    const minuteText = minutes > 1 ? "minuter" : "minut";
    const secondText = seconds > 1 ? "sekunder" : "sekund";

    const minuteWord = numberToSwedish(minutes);
    const secondWord = numberToSwedish(seconds);

    return `${minutes !== 0 ? minuteWord + " " + minuteText : ""} ${
      minutes == 0 || seconds == 0 ? "" : "och"
    } ${seconds > 0 ? secondWord + " " + secondText : ""} kvar. `;
  };

  return (
    <section className="h-full w-full flex justify-center items-center text-primary font-sans text-4xl font-bold">
      {formatTimeToSwedish().toLocaleUpperCase()}
    </section>
  );
};

export default Text;
