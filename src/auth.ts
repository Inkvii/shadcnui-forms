import NextAuth, { User } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Custom provider",
      credentials: {
        username: { type: "text", label: "Username", placeholder: "User" },
        password: { type: "password", label: "Password" },
      },
      async authorize(credentials): Promise<User | null> {
        // TODO LVE: Fill in authorization
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        return { name: credentials?.username ?? "ASD", email: "some@user.com", id: "1233" }
      },
    }),
  ],
})