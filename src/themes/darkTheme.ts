import { ThemeOptions } from "@mui/material";

const darkTheme: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#ff0000",
    },
    secondary: {
      main: "#7000ff",
    },
  },
  components: {
    MuiButton: { styleOverrides: { root: { borderRadius: 10 } } },
  },
};

export default darkTheme;
