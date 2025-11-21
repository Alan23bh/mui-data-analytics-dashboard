"use client";
import { Button } from "@mui/material";
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
        <Button
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
