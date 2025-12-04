"use client";
import { useSession } from "next-auth/react";
import { Box } from "@mui/material";
import Login from "@/app/components/Login/Login";

export const SignIn = (p0: string, p1: { callbackUrl: string }) => {
  const { data: session } = useSession();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>{session ? "Thank you for logging in" : ""}</h2>
      <Login />
    </Box>
  );
};

// NEW

export default SignIn;
