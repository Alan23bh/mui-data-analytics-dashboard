import { ThemeOptions } from "@mui/material";

const lightTheme: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#ffbb00",
    },
    secondary: {
      main: "#ff8400",
    },
    background: {
      default: "#dddddd",
    },
  },
  components: {
    MuiButton: { styleOverrides: { root: { borderRadius: 10 } } },
  },
};

export default lightTheme;
