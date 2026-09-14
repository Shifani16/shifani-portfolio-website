"use client";

import { useState, useEffect } from "react";
import { HyperText } from "@/components/ui/hyper-text";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";

export default function Intro() {
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);

  useEffect(() => {
    // Default duration for HyperText is 800ms
    const timer1 = setTimeout(() => {
      setShowSecond(true);
    }, 800);

    const timer2 = setTimeout(() => {
      setShowThird(true);
    }, 1600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <section className="fixed inset-0 z-50 w-full h-screen bg-neutral-950 overflow-hidden">
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
        
        {showThird && (
          <HyperText className="text-md">Welcome!</HyperText>
        )}
      </div>
    </section>
  );
}