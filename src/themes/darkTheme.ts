// import { ThemeOptions } from "@mui/material";

// const darkTheme: ThemeOptions = {
//   palette: {
//     mode: "dark",
//     primary: {
//       main: "#ff0000",
//     },
//     secondary: {
//       main: "#7000ff",
//     },
//   },
//   components: {
//     MuiButton: { styleOverrides: { root: { borderRadius: 10 } } },
//   },
// };

// export default darkTheme;
import { ThemeOptions, alpha } from "@mui/material/styles";

const darkTheme: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#8b7cff",
    },
    secondary: {
      main: "#4cc9f0",
    },
    background: {
      default: "#0b1020",
      paper: "#12192b",
    },
    text: {
      primary: "#f5f7fb",
      secondary: "#94a3b8",
    },
    divider: alpha("#ffffff", 0.08),
    success: {
      main: "#34d399",
    },
    warning: {
      main: "#f59e0b",
    },
  },
  shape: {
    borderRadius: 18,
  },
  typography: {
    fontFamily: "var(--font-geist-sans), sans-serif",
    h4: {
      fontWeight: 700,
      letterSpacing: "-0.03em",
    },
    h5: {
      fontWeight: 650,
      letterSpacing: "-0.02em",
    },
    h6: {
      fontWeight: 600,
    },
    body2: {
      color: "#94a3b8",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background:
            "radial-gradient(circle at top, rgba(139,124,255,0.12), transparent 28%), #0b1020",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "rgba(11, 16, 32, 0.72)",
          backdropFilter: "blur(18px)",
          boxShadow: "none",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          backgroundImage: "none",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: "#0f1628",
          borderRight: "1px solid rgba(255,255,255,0.08)",
          backgroundImage: "none",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backgroundColor: "#12192b",
          border: "1px solid rgba(255,255,255,0.06)",
          boxShadow: "0 16px 40px rgba(0,0,0,0.18)",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backgroundColor: "#12192b",
          border: "1px solid rgba(255,255,255,0.06)",
          boxShadow: "none",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          textTransform: "none",
          fontWeight: 600,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
};

export default darkTheme;