"use client";

import { ThemeContext } from "@/context";
import { useState } from "react";

export default function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <div
        className={`bg-white text-dark w-full min-h-screen ${
          darkMode ? "dark" : ""
        }`}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
