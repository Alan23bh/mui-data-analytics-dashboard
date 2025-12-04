// "use client";
// import { Button, Grid, Typography } from "@mui/material";
// import Box from "next-auth/providers/box";
// import { useSession, signIn, signOut } from "next-auth/react";

// const Login = () => {
//   const { data: session } = useSession();

//   // const userProfileName =   as string;

//   if (session) {
//     return (
//       <>
//         <Button variant={"contained"} color={"error"} onClick={() => signOut()}>
//           Sign out
//         </Button>
//       </>
//     );
//   } else {
//     return (
//       <>
//         <h1>Welcome! Please Log In</h1>
//         <Button
//           sx={{ display: "flex", margin: "auto" }}
//           variant={"contained"}
//           color={"success"}
//           onClick={() => signIn("google", { callbackUrl: "/auth/signin" })}
//         >
//           Sign In
//         </Button>
//       </>
//     );
//   }
// };

// export default Login;

"use client";

import { Box, Button, Typography, Paper } from "@mui/material";
import { useSession, signIn, signOut } from "next-auth/react";

const Login = () => {
  const { data: session } = useSession();

  if (session) {
    // Logged-in state (if someone hits "/" while already authenticated)
    return (
      <Box
        sx={{
          minHeight: "calc(100vh - 128px)", // space for header + footer
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          pt: 8,
        }}
      >
        <Paper
          elevation={4}
          sx={{
            maxWidth: 500,
            width: "90%",
            p: 4,
            borderRadius: 3,
            textAlign: "center",
            bgcolor: "background.paper",
          }}
        >
          <Typography variant="h4" fontWeight={700} gutterBottom>
            You’re already signed in
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Head over to the dashboard to explore the charts and data, or sign
            out to view the public landing page again.
          </Typography>

          <Button
            variant="contained"
            color="error"
            onClick={() => signOut()}
            sx={{ borderRadius: 999, px: 4 }}
          >
            Sign out
          </Button>
        </Paper>
      </Box>
    );
  }

  // Not logged-in state (what recruiters will see)
  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 128px)", // between header and footer
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        pt: 8, // push down a bit from header
      }}
    >
      <Paper
        elevation={4}
        sx={{
          maxWidth: 600,
          width: "90%",
          p: 4,
          borderRadius: 3,
          textAlign: "center",
          bgcolor: "background.paper",
        }}
      >
        <Typography variant="h3" fontWeight={700} gutterBottom>
          Welcome to DataSoft
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          A modern analytics dashboard built with Next.js, Material UI, Recharts
          and NextAuth. Sign in with Google to explore interactive charts,
          tables, and configurable settings—just like a real production admin
          panel.
        </Typography>

        <Button
          variant="contained"
          color="success"
          size="large"
          onClick={() =>
            signIn("google", {
              callbackUrl: "/dashboard",
            })
          }
          sx={{ borderRadius: 999, px: 5 }}
        >
          Sign in with Google
        </Button>
      </Paper>
    </Box>
  );
};

export default Login;
