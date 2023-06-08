import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") {
        return res.status(405).end();
    }

    try {
        const getTotalPlayers = await prisma.player.count({});

        res.status(200).json({ totalPlayers: getTotalPlayers });
    } catch (error) {
        res.status(500).json({ message: "getTotalPlayers API: Internal Server Error!" });
    }
}
