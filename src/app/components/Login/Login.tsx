"use client";
import { Button, Grid, Typography } from "@mui/material";
import Box from "next-auth/providers/box";
import { useSession, signIn, signOut } from "next-auth/react";

const Login = () => {
  const { data: session } = useSession();

  // const userProfileName =   as string;

  if (session) {
    return (
      <>
        <Button variant={"contained"} color={"error"} onClick={() => signOut()}>
          Sign out
        </Button>
      </>
    );
  } else {
    return (
      <>
        <h1>Welcome! Please Log In</h1>
        <Button
          sx={{ display: "flex", margin: "auto" }}
          variant={"contained"}
          color={"success"}
          onClick={() => signIn("google", { callbackUrl: "/auth/signin" })}
        >
          Sign In
        </Button>
      </>
    );
  }
};

export default Login;
