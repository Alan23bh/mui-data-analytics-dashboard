// import { withAuth } from "next-auth/middleware";

// export default withAuth({
//   pages: {
//     signIn: "/auth/signin",
//     signOut: "/auth/signout",
//     error: "/auth/error",
//     verifyRequest: "/auth/verifyrequest",
//     newUser: "/auth/newuser",
//   },
//   callbacks: {
//     authorized({ token, req }) {
//       console.log("MIDDLEWARE HIT:", req.nextUrl.pathname, "token:", !!token);
//       return !!token;
//     },
//   },
// });

// export type { NextMiddlewareWithAuth } from "next-auth/middleware";

// export const config = {
//   matcher: ["/dashboard/:path*", "/profile/:path*", "/settings/:path*"],
// };
import { withAuth } from "next-auth/middleware";

export default withAuth({
  // this should match your `[...nextauth]` pages config
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error",
    verifyRequest: "/auth/verifyrequest",
    newUser: "/auth/newuser",
  },
  callbacks: {
    authorized({ token }) {
      // only allow access if we have a token
      return !!token;
    },
  },
});

// IMPORTANT: only this extra export is allowed
export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*", "/settings/:path*"],
};
