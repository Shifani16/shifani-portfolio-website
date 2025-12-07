import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeUp from "../anim/FadeUp";

export default function Hero() {
  const roles = [
    "Website Developer",
    "Mobile Developer",
    "Data Scientist",
    "Artist",
    "Designer",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative grid grid-cols-1 md:grid-cols-2 items-center"
    >
      <FadeUp delay={0.1}>
        <div className="px-10 md:px-20 py-10 md:py-20 z-10">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-white">
            Hello, <span className="text-yellow-primary">Vani</span> here!
            <br />
            and I’m a <br />
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[index]}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block text-yellow-primary"
              >
                {roles[index]}
              </motion.span>
            </AnimatePresence>
          </h1>

          <p className="mt-4text-gray-300 max-w-md">
            A programmer based in Indonesia — always eager to learn.
          </p>

          <a
            href="#about"
            className="mt-6 inline-block px-6 py-3 bg-yellow-primary text-blue-secondary hover:bg-yellow-dark hover:text-white font-semibold rounded"
          >
            About Me
          </a>
        </div>
      </FadeUp>

      <FadeUp delay={0.2}>
        <div className="flex justify-end mt-10 md:mt-0 z-10">
          <img
            src="/images/shifani.png"
            alt="illustration"
            className="w-[400px] sm:w-[420px] md:w-[450px] lg:w-[550px]"
          />
        </div>
      </FadeUp>

      <FadeUp delay={0.3}>
        <img
          src="/images/laurel_1.png"
          alt="laurel-decoration"
          className="
          absolute
          -bottom-30
          md:-bottom-50
          left-0 
          w-full 
          max-w-[800px] 
          pointer-events-none
        "
        />
      </FadeUp>
    </section>
  );
}
