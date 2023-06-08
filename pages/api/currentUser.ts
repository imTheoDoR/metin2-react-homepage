import authSession from "@/helpers/authSession";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") {
        return res.status(405).end();
    }

    try {
        const { currentUser } = (await authSession(req, res)) ?? {};

        if (!currentUser) {
            return res.status(401).json({ message: "Unauthorized!" });
        }

        return res.status(200).json(currentUser);
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized!" });
    }
}
