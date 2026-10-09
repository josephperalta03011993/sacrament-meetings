import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    Credentials({
      credentials: {
        username: {
          label: "Username",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        const username = credentials?.username;
        const password = credentials?.password;

        if (
          typeof username !== "string" ||
          typeof password !== "string"
        ) {
          return null;
        }

        if (
          username === process.env.AUTH_USERNAME &&
          password === process.env.AUTH_PASSWORD
        ) {
          return {
            id: "bishopric-admin",
            name: "Bishopric Admin",
          };
        }

        return null;
      },
    }),
  ],
});