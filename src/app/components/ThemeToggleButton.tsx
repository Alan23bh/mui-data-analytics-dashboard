"use client";

// import { useContext } from "react";
import { IconButton, Tooltip } from "@mui/material";
// import { useTheme } from "@mui/material/styles";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useColorMode } from "./MuiThemeProvider";

export default function ThemeToggleButton() {
  const { mode, toggle } = useColorMode();
  const title =
    mode === "dark" ? "Switch to light mode" : "Switch to dark mode";

  return (
    <Tooltip title={title}>
      <IconButton color="inherit" onClick={toggle} aria-label={title}>
        {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    </Tooltip>
  );
}
