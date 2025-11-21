"use client";

import SideMenu from "./components/SideMenu/SideMenu";
// import styles from "./page.module.css";
import Dashboard from "@/app/dashboard/page";
import { useEffect } from "react";
import Login from "./components/Login/Login";
import { useSession } from "next-auth/react";
import scss from "./Home.module.scss";
import SignIn from "./auth/signin/SignIn";
import SignOut from "./auth/signout/SignOut";
import { useRouter } from "next/navigation";
import Footer from "./components/Footer/Footer";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status, router]);

  return (
    <main className={scss.main}>
      {session && <Dashboard />}
      {!session && <Login />}

      {/* {session ? <Dashboard /> : <Login />} */}
    </main>
    // </div>
  );
}
