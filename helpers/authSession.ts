import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const authSession = async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getServerSession(req, res, authOptions);

    if (!session?.user?.name) {
        throw new Error("You are not authenticated.");
    }

    const currentUser = await prisma.account.findUnique({
        where: {
            login: session.user.name ?? undefined,
        },
    });

    if (!currentUser) {
        throw new Error("You are not authenticated.");
    }

    const { login, email, isAdmin } = currentUser;

    return { currentUser, login, email, isAdmin };
};

export default authSession;
