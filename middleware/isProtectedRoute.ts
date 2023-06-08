import { NextApiRequest, NextApiResponse } from "next";
import authSession from "@/helpers/authSession";

const isProtectedRoute = async (req: NextApiRequest, res: NextApiResponse, next: () => void) => {
    try {
        const { isAdmin } = await authSession(req, res);

        if (!isAdmin) {
            return res.status(403).json({ message: "Access denied" });
        }

        next();
    } catch (error) {
        return res.status(401).json({ message: error });
    }
};

export default isProtectedRoute;
