import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") {
        return res.status(405).end();
    }

    try {
        const getTotalAccounts = await prisma.account.count({});

        res.status(200).json({ totalAccounts: getTotalAccounts });
    } catch (error) {
        res.status(500).json({ message: "getTotalAccounts API: Internal Server Error!" });
    }
}
