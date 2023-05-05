import CredentialsProvider from 'next-auth/providers/credentials'
import { NuxtAuthHandler } from '#auth'

export default NuxtAuthHandler({
  secret: 'secret',
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/login',
    signOut: '/login',
    error: '/login',
  },
  providers: [
    // @ts-ignore Import is exported on .default during SSR, so we need to call it this way. May be fixed via Vite at some point
    CredentialsProvider.default({
      name: 'credentials',
      credentials: {},
      async authorize(credentials: any) {
        return {
          name: 'Test User',
          accessToken: 'example-access-token__example-access-token__example-access-token__example-access-token__example-access-token__example-access-token__example-access-token__example-access-token__example-access-token__example-access-token__example-access-token__example-access-token__example-access-token__example-access-token__example-access-token__example-access-token__example-access-token__example-access-token__example-access-token__example-access-token__example-access-token__example-access-token__example-access-token__example-access-token__example-access-token__example-access-token__example-access-token__example-access-token__example-access-token__example-access-token__example-access-token__example-access-token__example-access-token__example-access-token__example-access-token__example-access-token__example-access-token__example-access-token__example-access-token__example-access-token__example-access-token__example-access-token__example-access-token__example-access-token__example-access-token__example-access-token__example-access-token__example-access-token__example-access-token__example-access-token__example-access-token__example-access-token__example-access-token__example-access-token__example-access-token__example-access-token__example-access-token__example-access-token__example-access-token__example-access-token__example-access-token__example-access-token__example-access-token__example-access-token__example-access-token__example-access-token__example-access-token__example-access-token',
          refreshToken: 'example-refresh-token__example-refresh-token__example-refresh-token__example-refresh-token__example-refresh-token__example-refresh-token__example-refresh-token__example-refresh-token__example-refresh-token__example-refresh-token__example-refresh-token__example-refresh-token__example-refresh-token__example-refresh-token__example-refresh-token__example-refresh-token__example-refresh-token__example-refresh-token__example-refresh-token__example-refresh-token__example-refresh-token__example-refresh-token__example-refresh-token__example-refresh-token__example-refresh-token__example-refresh-token__example-refresh-token__example-refresh-token__example-refresh-token__example-refresh-token__example-refresh-token__example-refresh-token__example-refresh-token__example-refresh-token__example-refresh-token__example-refresh-token__example-refresh-token__example-refresh-token__example-refresh-token__example-refresh-token__example-refresh-token__example-refresh-token__example-refresh-token__example-refresh-token__example-refresh-token__example-refresh-token__example-refresh-token__example-refresh-token__example-refresh-token__example-refresh-token__example-refresh-token__example-refresh-token__example-refresh-token__example-refresh-token__example-refresh-token__example-refresh-token__example-refresh-token__example-refresh-token__example-refresh-token__example-refresh-token__example-refresh-token__example-refresh-token__example-refresh-token__example-refresh-token__example-refresh-token__example-refresh-token__example-refresh-token__example-refresh-token'
        }
      },
    }),
  ],
  callbacks: {
    jwt({
      token,
      user,
      account,
    }) {
      if (account && user) {
        return {
          ...token,
          ...user,
        }
      }

      return token
    },
    session({ session, token }) {
      session.user = {
        ...session.user,
        accessToken: token.accessToken,
      }

      return session
    },
  },
})