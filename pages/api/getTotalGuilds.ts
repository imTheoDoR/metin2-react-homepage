import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") {
        return res.status(405).end();
    }

    try {
        const getTotalGuilds = await prisma.guild.count({});

        res.status(200).json({ totalGuilds: getTotalGuilds });
    } catch (error) {
        res.status(500).json({ message: "getTotalGuilds API: Internal Server Error!" });
    }
}
