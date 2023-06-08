import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import moment from "moment-timezone";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") {
        return res.status(405).end();
    }

    const timeZone = process.env.APP_TIME_ZONE || "Europe/Bucharest";

    const currentTimestamp = new Date();

    const offset = moment().tz(timeZone).utcOffset() / 60;
    const timestampInDesiredZone = new Date(currentTimestamp.setHours(currentTimestamp.getHours() + offset));
    const tenMinutesAgo = new Date(timestampInDesiredZone.getTime() - 10 * 60 * 1000);

    try {
        const playersOnline = await prisma.account.findMany({
            where: {
                last_play: {
                    gte: tenMinutesAgo,
                },
            },
        });

        const playersOnlineCounter = playersOnline.length;

        res.status(200).json({ playersOnline: playersOnlineCounter });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}
