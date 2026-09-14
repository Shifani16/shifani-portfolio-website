import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky font-mono z-50 text-neutral-500 uppercase bg-transparent transition-colors duration-300 py-3 ${isScrolled ? "bg-blue-secondary" : "bg-blue-primary"}`}
    >
      <div className="hidden md:flex text-xs gap-5 top-0 md:flex-row justify-center">
        {["Home", "About", "Work", "Skills", "Contact"].map((item) => {
          const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;

          return (
            <Link
              key={item}
              to={path}
              className="relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 
              after:bg-pink-500
              after:transition-all after:duration-300 
              hover:after:w-full hover:text-pink-500"
            >
              {item}
            </Link>
          );
        })}
        <div className="">
          <i className="ri-shining-fill"></i>
        </div>
      </div>

      <div className="md:hidden flex justify-between items-center relative">
        <div>
          <i
            className={`ri-add-large-line text-xl inline-block transition-transform duration-300 ${isPressed ? "rotate-90 text-pink-400" : ""}`}
            onClick={() => setIsPressed(!isPressed)}
          ></i>
        </div>

        {isPressed && (
          <motion.div
            initial={{ scaleY: 0, originY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0, originY: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 top-[calc(var(--navbar-height,80px))] bg-[#f8f7fc]/85 backdrop-blur-md z-50 flex flex-col items-center justify-center gap-8 text-2xl overflow-hidden"
          >
            {["Home", "About", "Work", "Skills", "Contact"].map(
              (item, index) => {
                const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;

                return (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.05, duration: 0.3 }}
                  >
                    <Link
                      to={path}
                      onClick={() => setIsPressed(false)}
                      className="relative pb-1 tracking-widest text-neutral-700 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 
            after:bg-pink-500 after:transition-all after:duration-300
            hover:after:w-full hover:text-pink-500"
                    >
                      
                      {item}
                    </Link>
                  </motion.div>
                );
              },
            )}
          </motion.div>
        )}
      </div>
    </nav>
  );
}
