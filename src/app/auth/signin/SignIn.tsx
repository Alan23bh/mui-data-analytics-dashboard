// "use client";
// import { useSession } from "next-auth/react";
// import { Box } from "@mui/material";
// import Login from "@/app/components/Login/Login";

// export const SignIn = (p0: string, p1: { callbackUrl: string }) => {
//   const { data: session } = useSession();

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <h2>{session ? "Thank you for logging in" : ""}</h2>
//       <Login />
//     </Box>
//   );
// };

// export default SignIn;
"use client";

import { useSession } from "next-auth/react";
import { Box, Typography } from "@mui/material";
import Login from "@/app/components/Login/Login";

export default function SignIn() {
  const { data: session } = useSession();

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 128px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {session && (
        <Typography variant="h6" sx={{ mb: 2 }}>
          Thank you for logging in
        </Typography>
      )}
      <Login />
    </Box>
  );
}
