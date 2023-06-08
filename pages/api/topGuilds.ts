import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") {
        return res.status(405).end();
    }

    try {
        const topGuilds = await prisma.guild.findMany({
            take: 5,
            orderBy: [
                {
                    level: "desc",
                },
                {
                    ladder_point: "desc",
                },
            ],
        });

        const getGuilds = topGuilds.map(({ name, level, ladder_point }) => ({
            name,
            level,
            ladder_point,
        }));

        res.status(200).json(getGuilds);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}
