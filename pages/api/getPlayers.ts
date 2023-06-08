import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") {
        return res.status(405).end();
    }

    try {
        const getPlayers = await prisma.player.findMany({
            orderBy: [{ level: "desc" }, { playtime: "desc" }],
        });

        const getPlayersData = await Promise.all(
            getPlayers.map(async ({ name, job, level, exp, account_id }) => {
                const playerIndex = await prisma.player_index.findFirst({
                    where: {
                        OR: [{ id: account_id }],
                    },
                    select: { empire: true },
                });

                return {
                    name,
                    job,
                    level,
                    exp,
                    empire: playerIndex?.empire || 0,
                };
            })
        );

        res.status(200).json(getPlayersData);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}
