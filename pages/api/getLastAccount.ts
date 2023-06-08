import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") {
        return res.status(405).end();
    }

    try {
        const getLastAccount = await prisma.account.findFirst({
            orderBy: {
                create_time: "desc",
            },
            select: { login: true },
        });

        res.status(200).json({ lastAccount: getLastAccount });
    } catch (error) {
        res.status(500).json({ message: "getLastAccount API: Internal Server Error!" });
    }
}
