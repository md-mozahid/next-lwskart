import { MongoDBAdapter } from '@auth/mongodb-adapter'
import bcrypt from 'bcryptjs'
import NextAuth from 'next-auth'
import CredentialProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import clientPromise from "./backend/database/mongoClientPromise";
import { userModel } from "./backend/models/user-model";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
  
} = NextAuth({
  adapter: MongoDBAdapter(clientPromise, {
    databaseName: process.env.ENVIRONMENT,
  }),
  session: {
    strategy: 'jwt',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (credentials === null) return null

        try {
          const user = await userModel.findOne({ email: credentials?.email })
          if (user) {
            // const isMatch = user?.password === credentials.password
            const isMatch = await bcrypt.compare(
              credentials.password,
              user.password
            )

            if (isMatch) {
              return user
            } else {
              throw new Error('Email or Password is not correct')
            }
          } else {
            throw new Error('User not found')
          }
        } catch (error) {
          throw new Error(error)
        }
      },
    }),
  ],
})
