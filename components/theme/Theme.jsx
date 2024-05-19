"use client";

import Image from "next/image";
import { useState } from "react";

export default function Theme() {
  const [theme, setTheme] = useState(false);
  return (
    <button className="bg-primary/20 dark:bg-slate-600 rounded-lg backdrop-blur-[2px] p-1 inline-block">
      <Image
        src={`${theme ? "/sun.svg" : "/moon.svg"}`}
        width="24"
        height="24"
        alt=""
        onClick={() => setTheme(!theme)}
      />
    </button>
  );
}
