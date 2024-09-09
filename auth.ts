import NextAuth from "next-auth";

export const { handers, signIn, signOut, auth } = NextAuth({
    providers: []
})