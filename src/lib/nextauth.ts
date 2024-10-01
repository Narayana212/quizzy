import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { type GetServerSidePropsContext } from "next";
import {
  getServerSession,
  type NextAuthOptions,
  type DefaultSession,
} from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "@/lib/db";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"];
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
  }
}

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    /**
     * Asynchronously retrieves and updates a JWT token with user information
     * @param {Object} options - The options object
     * @param {Object} options.token - The JWT token object containing user information
     * @returns {Object} The updated token object with user ID if found in the database
     */
    jwt: async ({ token }) => {
      const db_user = await prisma.user.findFirst({
        where: {
          email: token?.email,
        },
      /**
       * Updates the session object with user information from the provided token
       * @param {Object} options - The options object containing session and token
       * @param {Object} options.session - The current session object
       * @param {Object} options.token - The token object containing user information
       * @returns {Object} The updated session object
       */
      });
      if (db_user) {
        token.id = db_user.id;
      }
      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
      }
      return session;
    },
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
};

```
/**
 * Retrieves the authenticated session using server-side authentication.
 * @returns {Promise<Session | null>} A promise that resolves to the authenticated session object if available, or null if no session exists.
 */
```export const getAuthSession = () => {
  return getServerSession(authOptions);
};
