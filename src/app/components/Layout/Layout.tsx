"use client";
import { useSession } from "next-auth/react";
import SideMenu from "../SideMenu/SideMenu";
import styles from "./Layout.module.scss";

const Layout = (props: any) => {
  const { data: session } = useSession();

  return (
    <main
      className={styles.layout}
      style={{ padding: session ? "0 24px 0 80px" : 0 }}
    >
      {session && <SideMenu />}
      {props.children}
    </main>
  );
};

export default Layout;
