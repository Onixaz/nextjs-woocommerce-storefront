import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth from 'next-auth'
import jwt from 'jsonwebtoken'
import Providers from 'next-auth/providers'
import { fetcher, poster } from '../../../utils/functions'

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
          const { username, password, cartString } = credentials
          const authReq = await poster('/wp-json/jwt-auth/v1/token', { username, password }, 'POST')
          const authRes = await authReq.json()

          if (authRes && authRes.token) {
            const userId: any = jwt.decode(authRes.token)
            const userUrl = `/wp-json/wc/v3/customers/${userId.data.user.id}`
            const cart = JSON.parse(cartString)
            if (cart.items.length > 0) {
              await poster(userUrl, { meta_data: [{ key: 'cart', value: cart.key }] }, 'PUT')
            }

            const user = {
              username: authRes.user_display_name,
              key: authRes.token,
            }
            return user
          } else {
            console.log(authRes)
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
