import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { getServerSession, type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "~/server/db";
import { loginSchema } from "~/types/loginSchema";

export const authOptions: NextAuthOptions = {
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.id = user.id;
        token.name = user.name;
      }
      return token;
    },
    session: ({ session, token }) => ({
      ...session,
      user: {
        ...session.user,
        id: token.sub,
      },
    }),
  },
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24 * 30,
  },
  secret: process.env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(db),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        name: { label: "name", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        const creds = await loginSchema.parseAsync(credentials);

        const user = await db.user.findFirst({
          where: { name: creds.name },
        });

        if (!user) {
          return null;
        }

        return {
          id: user.id,
          name: user.name,
        };
      },
    }),
  ],
  pages: {
    signIn: "/?login=true",
  },
};

export const getServerAuthSession = () => getServerSession(authOptions);
