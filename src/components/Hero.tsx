// src/components/Hero.tsx
import { motion } from "framer-motion";
import { SparklesText } from "./ui/sparkles-text";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern"

export function Hero() {
  return (
    <section className="relative h-full flex flex-col text-center items-center justify-center py-5 px-6 md:px-20 overflow-hidden">
      <div className="hidden md:block absolute inset-0 z-0 overflow-hidden opacity-25 pointer-events-none">
        <InteractiveGridPattern
          squares={[40, 40]}
          className="w-full h-full transform rotate-12 scale-150 stroke-neutral-400/30"
          squaresClassName="pointer-events-auto hover:!fill-pink-500/80"
        />
      </div>

      <div className="absolute inset-0 z-0 overflow-hidden opacity-25 pointer-events-none md:hidden">
        <AnimatedGridPattern
        numSquares={10}
        className="w-full h-full transform rotate-12 scale-150 stroke-neutral-400/30"
         />

      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-xl space-y-6 flex flex-col items-center"
      >
        <SparklesText>
          <h1 className="text-6xl lg:text-8xl font-extrabold tracking-tight text-neutral-600 font-serif italic mt-12">
            Shifani's{" "}
            <span className="font-silkscreen not-italic font-light text-pink-500">
              <br className="mb-2" />
              LOG
            </span>
          </h1>
        </SparklesText>

        <p className="text-sm md:text-lg text-neutral-600 leading-relaxed">
          Here's you gonna find my track and journey as aspiring developer who
          wishes to become a full-fledged software engineer.
        </p>

        <div className="flex flex-col md:flex-row gap-4 pt-2 justify-center">
          <a
            href="#nav"
            className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white hover:bg-neutral-800 transition shadow-sm"
          >
            Explore →
          </a>
          <a
            href="/contact"
            className="rounded-full border border-neutral-300 bg-white/50 px-6 py-3 text-sm font-semibold text-neutral-800 backdrop-blur-md hover:bg-white/80 transition"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
      <div className="absolute bottom-6 right-6 z-20 flex flex-col items-center text-xs tracking-widest text-neutral-400 font-mono select-none pointer-events-none">
        <span className="opacity-50">|</span>
        <span className="opacity-75">|</span>
        <span>|</span>
        <span>S</span>
        <span>C</span>
        <span>R</span>
        <span>O</span>
        <span>L</span>
        <span>L</span>
        <span><i className="bi bi-arrow-down"></i></span>
        
      </div>
    </section>
  );
}

export default Hero;