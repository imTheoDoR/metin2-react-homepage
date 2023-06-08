import { NextApiRequest, NextApiResponse } from "next";
import { hashDoubleShaOne } from "@/helpers/hashDoubleShaOne";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import validator from "validator";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).end();
    }

    const { username, password, repassword, email, social_id } = req.body;
    const isEmail = validator.isEmail(email);

    if (username === "" || !username.trim()) return res.status(400).json({ message: "Please set a username." });
    if (password === "" || !password.trim()) return res.status(400).json({ message: "You should set a password." });
    if (password !== repassword) return res.status(400).json({ message: "Passwords do not match." });
    if (!isEmail) return res.status(400).json({ message: "Please specify a valid email address." });
    if (social_id === "" || !social_id.trim())
        return res.status(400).json({ message: "You must set the delete code for your characters." });

    // Check data length
    if (username.length < 4)
        return res.status(400).json({ message: "The username must be composed of a min of 4 characters." });
    if (username.length > 14)
        return res.status(400).json({ message: "The username must be composed of a max of 14 characters." });
    if (password.length > 6)
        return res.status(400).json({ message: "The password must be composed of a min of 6 characters." });
    if (password.length > 14)
        return res.status(400).json({ message: "The password must be composed of a max of 14 characters." });
    if (social_id.length !== 7)
        return res.status(400).json({ message: "The character delete code must be composed of 7 characters." });

    try {
        // Check if the username already exist
        const checkUser = await prisma.account.findUnique({
            where: {
                login: username,
            },
        });
        if (checkUser) return res.status(400).json({ message: "This username is already registered!" });

        // Check if the email address is unique
        const availableEmail = await prisma.account.findUnique({
            where: {
                email: email,
            },
        });
        if (availableEmail) return res.status(400).json({ message: "Email address already exist." });

        // Hash the password
        const hashedPassword = hashDoubleShaOne(password).hash.toUpperCase();

        // Create the user
        const registerUser = await prisma.account.create({
            data: {
                login: username,
                password: hashedPassword,
                email,
                social_id,
                create_time: new Date(),
            },
        });

        // Put the user to the database
        return res.status(200).json(registerUser);
    } catch (error) {
        return res.status(400).end();
    }
}
