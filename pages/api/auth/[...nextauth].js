import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from "next-auth/providers/credentials";
import connectMongo from "@nauth/database/conn";
import User from "@nauth/model/Schema";
import { compare } from "bcryptjs";

export default NextAuth({
  providers : [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),

    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),

    CredentialsProvider({
      name : "Credentials",
      async authorize(credentials, req){
        await connectMongo().catch(error => { error: "Connection Failed!"})

        const result = await User.findOne( { email: credentials.email})
        if(!result){
          throw new Error("No user Found with Email Please Sign Up...!")
        }

        const checkPassword = await compare(credentials.password, result.password);

        if(!checkPassword || result.email !== credentials.email){
          throw new Error("Username or Password doesn't match");
        }
        return result;
      }
    })
  ]
})