import { ThemeOptions, alpha } from "@mui/material/styles";

const lightTheme: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#5b4ff7",
    },
    secondary: {
      main: "#0ea5e9",
    },
    background: {
      default: "#edf2f7",
      paper: "#f8fafc",
    },
    text: {
      primary: "#0f172a",
      secondary: "#5f6b7a",
    },
    divider: alpha("#0f172a", 0.1),
    success: {
      main: "#16a34a",
    },
    warning: {
      main: "#d97706",
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
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background:
            "radial-gradient(circle at top, rgba(91,79,247,0.06), transparent 24%), #edf2f7",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "rgba(248,250,252,0.78)",
          color: "#0f172a",
          backdropFilter: "blur(18px)",
          boxShadow: "none",
          borderBottom: "1px solid rgba(15,23,42,0.08)",
          backgroundImage: "none",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: "#f8fafc",
          borderRight: "1px solid rgba(15,23,42,0.08)",
          backgroundImage: "none",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backgroundColor: "#fdfefe",
          border: "1px solid rgba(15,23,42,0.08)",
          boxShadow: "0 10px 30px rgba(15,23,42,0.05)",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backgroundColor: "#fdfefe",
          border: "1px solid rgba(15,23,42,0.08)",
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

export default lightTheme;
