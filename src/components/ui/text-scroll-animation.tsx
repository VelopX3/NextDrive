"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import ReactLenis from "lenis/react";
import React, { useRef } from "react";
import { cn } from "@/lib/utils";

type CharacterProps = {
  char: string;
  index: number;
  centerIndex: number;
  scrollYProgress: any;
};

const CharacterV1 = ({
  char,
  index,
}: CharacterProps) => {
  const isSpace = char === " ";

  return (
    <motion.span
      className={cn("inline-block text-orange-500", isSpace && "w-4 lg:w-8")}
    >
      {char}
    </motion.span>
  );
};

const CharacterV2 = ({
  char,
  index,
  centerIndex,
  scrollYProgress,
}: CharacterProps) => {
  const distanceFromCenter = index - centerIndex;

  const x = useTransform(scrollYProgress, [0, 0.5], [distanceFromCenter * 50, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.75, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [Math.abs(distanceFromCenter) * 50, 0]);

  return (
    <motion.img
      src={char}
      alt="Car"
      className="h-32 w-48 shrink-0 object-cover rounded-xl shadow-lg will-change-transform"
      style={{ x, scale, y, transformOrigin: "center" }}
    />
  );
};

const CharacterV3 = ({
  char,
  index,
  centerIndex,
  scrollYProgress,
}: CharacterProps) => {
  const distanceFromCenter = index - centerIndex;

  const x = useTransform(scrollYProgress, [0, 0.5], [distanceFromCenter * 90, 0]);
  const rotate = useTransform(scrollYProgress, [0, 0.5], [distanceFromCenter * 50, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [-Math.abs(distanceFromCenter) * 20, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.75, 1]);

  return (
    <motion.img
      src={char}
      alt="Car"
      className="h-32 w-48 shrink-0 object-cover rounded-xl shadow-lg will-change-transform"
      style={{ x, rotate, y, scale, transformOrigin: "center" }}
    />
  );
};

const Skiper31 = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const targetRef2 = useRef<HTMLDivElement | null>(null);
  const targetRef3 = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({ target: targetRef });
  const { scrollYProgress: scrollYProgress2 } = useScroll({ target: targetRef2 });
  const { scrollYProgress: scrollYProgress3 } = useScroll({ target: targetRef3 });

  const text = "how to rent a car";
  const characters = text.split("");
  const centerIndex = Math.floor(characters.length / 2);

  const carImages = [
    "https://images.unsplash.com/photo-1503376760367-11ea8ebac22a?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1525609004556-c46dce31c4b3?auto=format&fit=crop&w=400&q=80",
  ];
  const iconCenterIndex = Math.floor(carImages.length / 2);

  return (
    <ReactLenis root>
      <div className="w-full bg-white relative z-10 py-10">
        {/* Block 1 — Text */}
        <div
          ref={targetRef}
          className="relative box-border flex py-20 lg:py-32 items-center justify-center gap-[2vw] overflow-hidden bg-white px-4"
        >
          <div
            className="w-full max-w-4xl text-center text-4xl lg:text-7xl font-bold uppercase tracking-tighter text-black"
          >
            {characters.map((char, index) => (
              <CharacterV1
                key={index}
                char={char}
                index={index}
                centerIndex={centerIndex}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>

        {/* Block 2 */}
        <div
          ref={targetRef2}
          className="relative box-border flex h-[100vh] flex-col items-center justify-center gap-12 overflow-hidden bg-white p-[2vw]"
        >
          <p className="flex items-center justify-center gap-3 text-xl lg:text-3xl font-medium tracking-tight text-black">
            <Bracket className="h-10 lg:h-16 text-black" />
            <span className="font-medium">choose from our wide range of cars</span>
            <Bracket className="h-10 lg:h-16 scale-x-[-1] text-black" />
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-8 max-w-6xl mx-auto">
            {carImages.map((char, index) => (
              <CharacterV2
                key={index}
                char={char}
                index={index}
                centerIndex={iconCenterIndex}
                scrollYProgress={scrollYProgress2}
              />
            ))}
          </div>
        </div>

        {/* Block 3 */}
        <div
          ref={targetRef3}
          className="relative box-border flex h-[100vh] flex-col items-center justify-center gap-12 overflow-hidden bg-white p-[2vw]"
        >
          <p className="flex items-center justify-center gap-3 text-xl lg:text-3xl font-medium tracking-tight text-black">
            <Bracket className="h-10 lg:h-16 text-black" />
            <span className="font-medium">and drive away in style</span>
            <Bracket className="h-10 lg:h-16 scale-x-[-1] text-black" />
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-8 max-w-6xl mx-auto" style={{ perspective: "500px" }}>
            {carImages.map((char, index) => (
              <CharacterV3
                key={index}
                char={char}
                index={index}
                centerIndex={iconCenterIndex}
                scrollYProgress={scrollYProgress3}
              />
            ))}
          </div>
        </div>
      </div>
    </ReactLenis>
  );
};

export { CharacterV1, CharacterV2, CharacterV3, Skiper31 };

const Bracket = ({ className }: { className: string }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 27 78" className={className}>
      <path
        fill="currentColor"
        d="M26.52 77.21h-5.75c-6.83 0-12.38-5.56-12.38-12.38V48.38C8.39 43.76 4.63 40 .01 40v-4c4.62 0 8.38-3.76 8.38-8.38V12.4C8.38 5.56 13.94 0 20.77 0h5.75v4h-5.75c-4.62 0-8.38 3.76-8.38 8.38V27.6c0 4.34-2.25 8.17-5.64 10.38 3.39 2.21 5.64 6.04 5.64 10.38v16.45c0 4.62 3.76 8.38 8.38 8.38h5.75v4.02Z"
      />
    </svg>
  );
};
