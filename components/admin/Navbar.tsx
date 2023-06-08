import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Navbar = () => {
    const router = useRouter();
    const { asPath: path } = router;

    return (
        <div className="w-48 bg-dark">
            <span className="text-gold text-2xl uppercase font-bold px-5 bg-gold/40">Admin page</span>
            <ul className="bg-dark2">
                <li
                    className={`${
                        path === "/admin" && "bg-red-100/10"
                    } py-2 px-3 text-red-50 hover:bg-gold/20 duration-200`}
                >
                    <Link href="/admin">Main page</Link>
                </li>
                <li
                    className={`${
                        path === "/admin/settings" && "bg-red-100/10"
                    } py-2 px-3 text-red-50 hover:bg-gold/20 duration-200`}
                >
                    <Link href="/admin/settings">Settings</Link>
                </li>
                <li
                    className={`${
                        path === "/admin/players" && "bg-red-100/10"
                    } py-2 px-3 text-red-50 hover:bg-gold/20 duration-200`}
                >
                    <Link href="/admin/players">Players</Link>
                </li>
                <li
                    className={`${
                        path === "/admin/createitem" && "bg-red-100/10"
                    } py-2 px-3 text-red-50 hover:bg-gold/20 duration-200`}
                >
                    <Link href="/admin/createitem">Create a item</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
