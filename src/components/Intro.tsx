"use client";

import { useState, useEffect } from "react";
import { HyperText } from "@/components/ui/hyper-text";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { motion, AnimatePresence } from "framer-motion";

export default function Intro() {
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);

  const [isExiting, setIsExiting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowSecond(true);
    }, 800);

    const timer2 = setTimeout(() => {
      setShowThird(true);
    }, 1600);

    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 2600);

    const finishTimer = setTimeout(() => {
      setIsFinished(true);
    }, 3600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(exitTimer);
      clearTimeout(finishTimer);
    };
  }, []);

  if (isFinished) return null;

  const pixels = Array.from({ length: 64 });

  return (
    <section className="fixed inset-0 z-50 w-full h-screen bg-neutral-950 overflow-hidden">
      <AnimatePresence>
        {!isExiting && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-neutral-950 z-50 flex flex-col items-center justify-center"
          >
            <div className="absolute inset-0 z-0 overflow-hidden opacity-25 pointer-events-none">
              <AnimatedGridPattern
                numSquares={30}
                className="w-full h-full transform rotate-12 scale-150 stroke-neutral-400/30"
              />
            </div>
            <div className="min-h-screen text-neutral-200 flex flex-col text-center items-center justify-center relative z-10">
              <HyperText className="text-sm">Initializing...</HyperText>

              {showSecond && (
                <HyperText className="text-sm">
                  System start... LOG system activated...
                </HyperText>
              )}

              {showThird && <HyperText className="text-md">Welcome!</HyperText>}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute inset-0 grid grid-cols-8 md:grid-cols-12 grid-rows-8 md:grid-rows-12 z-20 pointer-events-none">
        {pixels.map((_, index) => (
          <motion.div
            key={index}
            className="bg-neutral-950 w-full h-full"
            initial={{ scale: 1, opacity: 1 }}
            animate={
              isExiting
                ? {
                    scale: 0,
                    opacity: 0,
                  }
                : {
                    scale: 1,
                    opacity: 1,
                  }
            }
            transition={{
              duration: 0.6,
              delay: (index % 8) * 0.04 + Math.random() * 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          ></motion.div>
        ))}
      </div>
    </section>
  );
}
