import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { hashDoubleShaOne } from "@/helpers/hashDoubleShaOne";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.username || !credentials.password) {
                    throw new Error("Invalid credentials.");
                }

                const user = await prisma.account.findUnique({
                    where: { login: credentials?.username },
                    select: { id: true, login: true, password: true, email: true, isAdmin: true, status: true },
                });

                if (user) {
                    const hashedPassword = hashDoubleShaOne(credentials?.password).hash;

                    if (user.password !== hashedPassword) {
                        throw new Error("Invalid credentials.");
                    }

                    if (user?.status === "BLOCK") {
                        throw new Error("This account is blocked!");
                    }

                    if (user.password === hashedPassword) {
                        return {
                            id: user.id.toString(),
                            name: user.login,
                            email: user.email,
                            isAdmin: user?.isAdmin || false,
                        };
                    }
                }

                return null;
            },
        }),
    ],
    debug: process.env.NEXT_PUBLIC_APP_ENV === "development",
    session: {
        strategy: "jwt",
        maxAge: 24 * 60 * 60,
        updateAge: 1 * 60 * 60,
    },
    jwt: {
        secret: String(process.env.NEXT_PUBLIC_NEXTAUTH_JWT_SECRET),
    },
    secret: String(process.env.NEXT_PUBLIC_NEXTAUTH_SECRET),
};

export default NextAuth(authOptions);
