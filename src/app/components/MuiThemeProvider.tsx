"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  ThemeProvider,
  CssBaseline,
  createTheme,
  PaletteMode,
} from "@mui/material";
import lightTheme from "@/themes/lightTheme";
import darkTheme from "@/themes/darkTheme";

type ColorCtx = { mode: PaletteMode; toggle: () => void };
const ColorModeContext = createContext<ColorCtx>({
  mode: "light",
  toggle: () => {},
});
export const useColorMode = () => useContext(ColorModeContext);

export default function MuiThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState<PaletteMode>("light");

  // initialize from localStorage or prefers-color-scheme
  useEffect(() => {
    const saved =
      typeof window !== "undefined"
        ? (localStorage.getItem("mode") as PaletteMode | null)
        : null;
    if (saved) setMode(saved);
    else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setMode("dark");
    }
  }, []);

  const toggle = () =>
    setMode((m) => {
      const next = m === "light" ? "dark" : "light";
      localStorage.setItem("mode", next);
      return next;
    });

  const theme = useMemo(
    () => createTheme(mode === "dark" ? darkTheme : lightTheme),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={{ mode, toggle }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
