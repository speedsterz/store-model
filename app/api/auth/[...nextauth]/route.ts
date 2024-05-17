import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          const res = await fetch(`${process.env.NEXTAUTH_URL}/api/login`, {
            method: "POST",
            body: JSON.stringify({
              username: credentials?.username,
              password: credentials?.password,
            }),
            headers: { "Content-Type": "application/json" },
          });

          const json = await res.json();

          if (res.status === 200) {
            return json.result;
          } else {
            throw JSON.stringify(json);
          }
        } catch (e) {
          throw new Error((e as Error).message);
        }
      },
    }),
  ],

  pages: { signIn: "/login" },

  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
