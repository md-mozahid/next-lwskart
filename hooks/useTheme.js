"use client";

import { ThemeContext } from "@/context";
import { useContext } from "react";

export function useTheme() {
  return useContext(ThemeContext);
}
