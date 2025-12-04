"use client";
import styled from "@emotion/styled";

import { ScreenShareSharp } from "@mui/icons-material";
import { Button, Paper, useTheme } from "@mui/material";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import scss from "./Footer.module.scss";
import SignIn from "@/app/auth/signin/SignIn";
import { signIn } from "next-auth/react";

const Footer = () => {
  const { data: session } = useSession();
  const theme = useTheme();
  const FooterLink = styled(Link)`
    color: ${theme.palette.text.primary};
  `;

  return (
    <footer className={scss.footer}>
      <Paper sx={{ width: "100%" }} color={"white"}>
        <ul role="menu" className={scss.navMenu}>
          <li className={scss.navItem}>
            <FooterLink href="/">Home</FooterLink>
          </li>
          <li className={scss.navItem}>
            <FooterLink href="/dashboard/data">Data</FooterLink>
          </li>
          <li className={scss.navItem}>
            <FooterLink href="/dashboard/profile">Profile</FooterLink>
          </li>
          <li className={scss.navItem}>
            <FooterLink href="/dashboard/settings">Settings</FooterLink>
          </li>
          <li className={scss.navItem}>
            <FooterLink href="/#termsandconditions">
              Terms and Conditions
            </FooterLink>
          </li>
          <li className={scss.navItem}>
            <FooterLink href="/#accessibilitystatement">
              Accessibility
            </FooterLink>
          </li>
          <li className={scss.navItem}>
            <Button
              variant={"text"}
              color={session ? "error" : "success"}
              onClick={() =>
                session
                  ? signOut()
                  : signIn("google", { callbackUrl: "/dashboard" })
              }
            >
              {session ? "Sign Out" : "Sign In"}
            </Button>
          </li>
        </ul>
      </Paper>
    </footer>
  );
};

export default Footer;
