"use client";

import { SessionProvider } from "next-auth/react";
import type { ReactNode } from "react";
import MuiThemeProvider from "./MuiThemeProvider";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <MuiThemeProvider>{children}</MuiThemeProvider>
    </SessionProvider>
  );
}
