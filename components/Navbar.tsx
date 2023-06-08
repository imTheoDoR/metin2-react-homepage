import React from "react";
import Link from "next/link";
import useCurrentUser from "@/hooks/useCurrentUser";

const Navbar = () => {
    const { data: currentUser } = useCurrentUser();

    return (
        <div className="bg-dark w-full h-16 flex justify-center items-center border-b-2 border-gold">
            <ul className="flex flex-row gap-10 text-lg font-semibold uppercase">
                <li className="duration-200 hover:text-gold">
                    <Link href="/">Home</Link>
                </li>
                <li className="duration-200 hover:text-gold">
                    <Link href="/download">Download</Link>
                </li>
                <li className="duration-200 hover:text-gold">
                    <Link href="/">Ranking</Link>
                </li>
                {!currentUser && (
                    <>
                        <li className="duration-200 hover:text-gold">
                            <Link href="/register">Register</Link>
                        </li>
                        <li className="duration-200 hover:text-gold">
                            <Link href="/">Login</Link>
                        </li>
                    </>
                )}
                <li className="duration-200 hover:text-gold">
                    <Link href="/">News</Link>
                </li>
                <li className="duration-200 hover:text-gold">
                    <Link href="/">Item Shop</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
