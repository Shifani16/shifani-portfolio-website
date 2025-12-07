import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 flex justify-center gap-10 py-6 text-yellow-light bg-blue-primary ${isScrolled ? "bg-blue-secondary" : "bg-blue-primary"}`}>
      {["Home", "Work", "Skills", "Contact"].map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 
            after:bg-white
            after:transition-all after:duration-300 
            hover:after:w-full hover:text-white "
        >
          {item}
        </a>
      ))}
    </nav>
  );
}
