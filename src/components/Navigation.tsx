import { useState, useEffect } from "react";
import { HyperText } from "@/components/ui/hyper-text";
import { Ripple } from "@/components/ui/ripple";

export default function Navigation() {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden relative">
      <div className="md:absolute flex items-center justify-center z-10 md:py-0 py-20" id="nav">
        <div className="absolute w-screen h-screen flex items-center justify-center pointer-events-none -z-10 overflow-visible">
          <Ripple numCircles={4} />
        </div>

        <HyperText
          key={animationKey}
          className="text-7xl tracking-[20px] font-mono text-neutral-700"
          as="h1"
        >
          NAV
        </HyperText>
      </div>

      {/* MOBILE VIEW */}
      <div className="flex flex-col gap-4 w-full max-w-sm z-20 my-2 md:hidden px-2">
        <a
          href="/about"
          className="block border-l-4 border-pink-500 w-full shadow-lg bg-neutral-300/10 px-4 py-4 rounded-lg hover:scale-105 hover:bg-neutral-500/10 transition cursor-pointer group"
        >
          <span className="text-xl font-silkscreen text-pink-500 group-hover:text-pink-800 transition block">
            ABOUT
          </span>
          <p className="font-mono text-xs text-neutral-600">
            About me, this website, and my resume you can read to know me.
          </p>
        </a>

        <a
          href="/work"
          className="block border-l-4 border-purple-500 w-full shadow-lg bg-neutral-300/10 px-4 py-4 rounded-lg hover:scale-105 hover:bg-neutral-500/10 transition cursor-pointer group"
        >
          <span className="text-xl font-silkscreen text-purple-500 group-hover:text-purple-800 transition block">
            WORK
          </span>
          <p className="font-mono text-xs text-neutral-600 mt-1">
            Contains my personal projects and work i did before.
          </p>
        </a>

        <a
          href="/skills"
          className="block border-l-4 border-blue-500 w-full shadow-lg bg-neutral-300/10 px-4 py-4 rounded-lg hover:scale-105 hover:bg-neutral-500/10 transition cursor-pointer group"
        >
          <span className="text-xl font-silkscreen text-blue-500 group-hover:text-blue-800 transition block">
            SKILLS
          </span>
          <p className="font-mono text-xs text-neutral-600 mt-1">
            What I've learned and what I can do, my skillset and knowledge.
          </p>
        </a>

        <a
          href="/contact"
          className="block border-l-4 border-teal-500 w-full shadow-lg bg-neutral-300/10 px-4 py-4 rounded-lg hover:scale-105 hover:bg-neutral-500/10 transition cursor-pointer group"
        >
          <span className="text-xl font-silkscreen text-teal-500 group-hover:text-teal-800 transition block">
            CONTACT
          </span>
          <p className="font-mono text-xs text-neutral-600 mt-1">
            To reach me out. I'll be happy to work with you.
          </p>
        </a>
      </div>

      {/* DESKTOP VIEW */}
      <div className="hidden md:block">
        <div className="absolute left-25 -translate-y-40 justify-start transition">
          <a
            href="/about"
            id="about"
            className="block border-l-4 border-pink-500 w-2/3 shadow-lg bg-neutral-300/10 px-4 py-4 rounded-lg hover:scale-105 hover:bg-neutral-500/10 transition cursor-pointer group"
          >
            <span className="text-2xl font-silkscreen text-pink-500 group-hover:text-pink-800 transition block">
              ABOUT
            </span>
            <p className="font-mono text-xs text-neutral-600 mt-1">
              About me, this website, and my resume you can read to know me.
            </p>
          </a>
        </div>

        <div className="absolute items-center -translate-x-90 translate-y-30 justify-start">
          <a
            href="/work"
            id="work"
            className="block border-l-4 border-purple-500 w-2/3 shadow-lg bg-neutral-300/10 px-4 py-4 rounded-lg hover:scale-105 hover:bg-neutral-500/10 transition cursor-pointer group"
          >
            <span className="text-2xl font-silkscreen text-purple-500 group-hover:text-purple-800 transition block">
              WORK
            </span>
            <p className="font-mono text-xs text-neutral-600 mt-1">
              Contains my personal projects and work i did before.
            </p>
          </a>
        </div>

        <div className="absolute items-center translate-x-50 translate-y-45 justify-start">
          <a
            href="/skills"
            id="skills"
            className="block border-l-4 border-blue-500 w-2/3 shadow-lg bg-neutral-300/10 px-4 py-4 rounded-lg hover:scale-105 hover:bg-neutral-500/10 transition cursor-pointer group"
          >
            <span className="text-2xl font-silkscreen text-blue-500 group-hover:text-blue-800 transition block">
              SKILLS
            </span>
            <p className="font-mono text-xs text-neutral-600 mt-1">
              What I've learned and what I can do, my skillset and knowledge.
            </p>
          </a>
        </div>

        <div className="absolute translate-x-70 -translate-y-30 justify-start">
          <a
            href="/contact"
            id="contact"
            className="block border-l-4 border-teal-500 w-2/3 shadow-lg bg-neutral-300/10 px-4 py-4 rounded-lg hover:scale-105 hover:bg-neutral-500/10 transition cursor-pointer group"
          >
            <span className="text-2xl font-silkscreen text-teal-500 group-hover:text-teal-800 transition block">
              CONTACT
            </span>
            <p className="font-mono text-xs text-neutral-600 mt-1">
              To reach me out. I'll be happy to work with you.
            </p>
          </a>
        </div>
      </div>

      <div className="absolute right-1 bottom-0 md:right-10 z-20 flex flex-col text-sm tracking-widest text-neutral-400 font-mono select-none pointer-events-none">
        <HyperText key={`touch-${animationKey}`} className="text-sm opacity-50">
          TOUCH TO PROCEED
        </HyperText>
      </div>

      <div className="absolute left-1 -translate-y-25 px-2 md:mb-0 md:left-10 md:-translate-y-45 z-20 flex flex-col text-sm tracking-widest text-neutral-400 font-mono select-none pointer-events-none">
        <HyperText key={`panel-${animationKey}`} className="text-sm opacity-50">
          NAVIGATION PANEL
        </HyperText>
      </div>
    </section>
  );
}