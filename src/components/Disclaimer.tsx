import { useState, useEffect } from "react";
import FadeUp from "../anim/FadeUp";

export default function Disclaimer() {
  const [isClose, setClose] = useState(false);
  const [isAppeared, setAppeared] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAppeared(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isClose || !isAppeared) return null;

  return (
    <FadeUp delay={0.1}>
      <div className="bg-pink-200 px-4 py-2 text-center justify-center flex flex-row border-2 border-pink-300 rounded-2xl opacity-90 gap-2 items-center">
        <p className="text-xs text-pink-900">
          For the best experience, please view this website on a desktop or
          laptop computer
        </p>
        <div className="hover:cursor-pointer ml-auto">
          <i
            className="ri-close-large-line text-pink-700 text-xl"
            onClick={() => setClose(true)}
          ></i>
        </div>
      </div>
    </FadeUp>
  );
}