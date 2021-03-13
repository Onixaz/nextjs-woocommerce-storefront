import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth from 'next-auth'

import Providers from 'next-auth/providers'
import { poster } from '../../../utils/functions'

const options = {
  providers: [
    Providers.Credentials({
      name: 'Credentials',

      credentials: {
        username: {
          label: 'Username',
          type: 'text',
        },
        password: {
          label: 'Password',
          type: 'password',
        },
      },
      authorize: async (credentials) => {
        try {
          //get user from wp
          const { username, password } = credentials
          const req = await poster('/wp-json/jwt-auth/v1/token', { username, password }, 'POST')
          const res = await req.json()

          if (res && res.token) {
            const user = { username: res.user_display_name, key: res.token }
            return user
          } else {
            console.log(res)
            return null
          }
        } catch (error) {
          console.log(error)
          return null
        }
      },
    }),
  ],

  session: {
    jwt: true,
    maxAge: 60 * 60 * 24 * 7, //7 days (same as jwt from wp)
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET_KEY,
  },
  //https://stackoverflow.com/questions/64576733/where-and-how-to-change-session-user-object-after-signing-in
  callbacks: {
    jwt: async (token: any, user: any) => {
      user && (token.user = user)
      return token
    },
    session: async (session: any, user: any) => {
      session.user = user.user
      return session
    },
  },
}

export default (req: NextApiRequest, res: NextApiResponse): Promise<void> =>
  NextAuth(req, res, options)
