import crypto from "crypto";

interface Props {
    hash: string;
}

export function hashDoubleShaOne(input: string): Props {
    const hash1 = crypto.createHash("sha1").update(input).digest();
    const hash2 = crypto.createHash("sha1").update(hash1).digest("hex");

    return {
        hash: "*" + hash2.toUpperCase(),
    };
}
