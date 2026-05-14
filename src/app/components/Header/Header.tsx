// "use client";

// // import { Avatar } from "@mui/material";
// import { signIn, signOut, useSession } from "next-auth/react";

// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";
// import ThemeToggleButton from "../ThemeToggleButton";
// import { useMediaQuery, useTheme } from "@mui/material";
// import Link from "next/link";
// import NextLink from "next/link";

// const pages = ["Products", "Pricing", "Blog"];

// function header() {
//   const theme = useTheme();
//   const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
//     null,
//   );
//   const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
//     null,
//   );

//   const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };
//   const { data: session } = useSession();
//   const userProfileImg = session?.user?.image as string;

//   const tabletCheck = useMediaQuery("(min-width: 768px");

//   return (
//     <AppBar position="static">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />

//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="/dashboard"
//             sx={{
//               mr: 2,
//               display: { xs: "none", md: "flex" },
//               fontFamily: "monospace",
//               fontWeight: 700,
//               letterSpacing: ".3rem",
//               color: "inherit",
//               textDecoration: "none",
//             }}
//           >
//             DataSoft
//           </Typography>

//           <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: "flex", md: "none" },
//               flexGrow: 1,
//               fontFamily: "monospace",
//               fontWeight: 700,
//               letterSpacing: ".3rem",
//               color: "inherit",
//               textDecoration: "none",
//             }}
//           >
//             DataSoft
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>
//           {tabletCheck && (
//             <Box sx={{ paddingRight: 5 }}>
//               <Typography>Signed in as {session?.user?.email}</Typography>
//             </Box>
//           )}
//           <ThemeToggleButton />
//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open Profile settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar
//                   alt={session?.user?.name as string}
//                   src={userProfileImg}
//                 />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: "45px" }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               <MenuItem>
//                 <NextLink
//                   href={"../dashboard/profile/"}
//                   style={{
//                     color: theme.palette.text.primary,
//                     textDecoration: "none",
//                   }}
//                 >
//                   <Typography textAlign="center">Profile</Typography>
//                 </NextLink>
//               </MenuItem>
//               <MenuItem onClick={() => (session ? signOut() : signIn())}>
//                 <Typography sx={{ textAlign: "center" }}>
//                   {session ? "Logout" : "Login"}
//                 </Typography>
//               </MenuItem>
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
// export default header;
"use client";

import * as React from "react";
import {
  AppBar,
  Avatar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
  Chip,
} from "@mui/material";
import { signIn, signOut, useSession } from "next-auth/react";
import ThemeToggleButton from "../ThemeToggleButton";
import NextLink from "next/link";
import { useMediaQuery, useTheme } from "@mui/material";

function Header() {
  const theme = useTheme();
  const { data: session } = useSession();
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null,
  );

  const tabletUp = useMediaQuery("(min-width:768px)");
  const userProfileImg = session?.user?.image as string | undefined;

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth={false} sx={{ px: { xs: 2, md: 3 } }}>
        <Toolbar disableGutters sx={{ minHeight: 72, gap: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.25 }}>
            <Box
              sx={{
                width: 32,
                height: 32,
                borderRadius: 2,
                background:
                  "linear-gradient(135deg, rgba(139,124,255,1), rgba(76,201,240,1))",
                boxShadow: "0 8px 24px rgba(76,201,240,0.22)",
              }}
            />
            <Box>
              <Typography
                component={NextLink}
                href="/dashboard"
                sx={{
                  textDecoration: "none",
                  color: "text.primary",
                  fontSize: 18,
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                }}
              >
                DataSoft
              </Typography>
              <Typography sx={{ fontSize: 12, color: "text.secondary" }}>
                Analytics workspace
              </Typography>
            </Box>
          </Box>

          <Box sx={{ flex: 1 }} />

          {tabletUp && session?.user?.email && (
            <Chip
              label={session.user.email}
              variant="outlined"
              sx={{
                borderColor: "divider",
                color: "text.secondary",
                borderRadius: 999,
                maxWidth: 260,
                "& .MuiChip-label": {
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                },
              }}
            />
          )}

          <ThemeToggleButton />

          <Tooltip title="Open profile menu">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar
                alt={session?.user?.name || "User avatar"}
                src={userProfileImg}
                sx={{ width: 38, height: 38 }}
              />
            </IconButton>
          </Tooltip>

          <Menu
            sx={{ mt: "12px" }}
            anchorEl={anchorElUser}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem onClick={handleCloseUserMenu}>
              <NextLink
                href="/dashboard/profile"
                style={{
                  color: theme.palette.text.primary,
                  textDecoration: "none",
                }}
              >
                Profile
              </NextLink>
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleCloseUserMenu();
                session ? signOut() : signIn();
              }}
            >
              {session ? "Logout" : "Login"}
            </MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
