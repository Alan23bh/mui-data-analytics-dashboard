import { withAuth } from "next-auth/middleware";
import { NextRequest } from "next/server";

export default withAuth({
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error",
    verifyRequest: "/auth/verifyrequest",
    newUser: "/auth/newuser",
  },
  callbacks: {
    authorized({ token, req }) {
      console.log("MIDDLEWARE HIT:", req.nextUrl.pathname, "token:", !!token);
      return !!token;
    },
  },
});

export type { NextMiddlewareWithAuth } from "next-auth/middleware";

export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*", "/settings/:path*"],
};
