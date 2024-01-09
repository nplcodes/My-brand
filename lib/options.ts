import CredentialsProvider from "next-auth/providers/credentials"
import { NextAuthOptions } from "next-auth";
import { db } from "./db";
import { PrismaAdapter } from "@next-auth/prisma-adapter";


export const authOptions:NextAuthOptions = {
    adapter: PrismaAdapter(db),
    pages: {
        signIn: '/login'
    },
    secret: process.env.NEXTAUTH_SECRET,
    session:{
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider({
          name: 'Credentials',
          credentials: {
            email: { label: "email", type: "email", placeholder: "email" },
            password: { label: "Password", type: "password", placeholder: "password" }
          },
          async authorize(credentials) {

            if(!credentials?.email || !credentials?.password){
                return null
            }
            const existingUser = await db.user.findUnique({
                where:{
                    email: credentials?.email
                }
            });
            if(!existingUser){
                return null
            }
            if(existingUser.password != credentials.password){
                    return null
            }
            return {
                id: `${existingUser.id}`,
                username: existingUser.username,
                email: existingUser.email
            }
          }
        })
      ],
      callbacks: {
        async jwt({ token, user }) {
            if(user){
                return{
                    ...token,
                    username: user.username
                }
            } 
            return token
          },
        async session({ session, token }) {
          return {
            ...session,
            user: {
                ...session.user,
                username: token.username
            }
        }
        }
    }
}