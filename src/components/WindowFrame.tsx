// src/components/WindowFrame.tsx
import React from "react";
import {useLocation} from "react-router-dom";
import Navbar from "./Navbar";
import MusicToggle from "./MusicToggle";

interface WindowFrameProps {
  children: React.ReactNode;
}

export function WindowFrame({ children }: WindowFrameProps) {
  const location = useLocation();

  const getHeaderTitle = (pathname: string) => {
    switch (pathname) {
      case "/":
        return "HERO / NAV / 01";
        break;
      case "/about":
      case "/work":
      case "/skills":
      case "/contact":
        return <Navbar />;
        break;  
      default:
        return "LOG / DEV / 000";
    }    
  }
  return (
    <div className="min-h-screen w-full p-4 md:p-6 flex items-center justify-center">
      <div className="relative w-full max-w-7xl h-[92vh] bg-[#f8f7fc]/90 backdrop-blur-md border border-neutral-300/60 rounded-2xl shadow-2xl overflow-hidden flex flex-col text-neutral-800">
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200/60 text-xs tracking-widest text-neutral-500 uppercase font-mono">
          <span>MY PORTFOLIO'S LOG</span>
          <span>{getHeaderTitle(location.pathname)}</span>
        </div>

        <div className="flex-1 overflow-y-auto relative">{children}</div>


        <div className="flex items-center justify-between px-6 py-3 border-neutral-200/60 text-[10px] tracking-wider text-neutral-400 uppercase font-mono bg-neutral-100/40">
          <span>©2026 Shifani</span>
          <span>LOG SYSTEM - INITIALIZED</span>
        </div>

        <MusicToggle />
      </div>
    </div>
  );
}
