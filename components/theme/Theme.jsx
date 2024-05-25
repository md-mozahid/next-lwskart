"use client";

import { useTheme } from "@/hooks/useTheme";
import Image from "next/image";

export default function Theme() {
  const { darkMode, setDarkMode } = useTheme(true);
  // console.log('darkmode', darkMode)
  return (
    <button className="bg-slate-400 dark:bg-slate-600 rounded-lg backdrop-blur-[2px] p-1 inline-block">
      <Image
        src={`${darkMode ? "/sun.svg" : "/moon.svg"}`}
        width="24"
        height="24"
        alt=""
        onClick={() => setDarkMode(!darkMode)}
      />
    </button>
  );
}
