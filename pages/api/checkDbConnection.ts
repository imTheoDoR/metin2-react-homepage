import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        await prisma.$connect();
        res.status(200).json({ connected: true });
    } catch (error) {
        console.log("Database connection error -> ", error);
        res.status(500).json({ connected: false });
    } finally {
        await prisma.$disconnect();
    }
}
