import React from "react";
import { BsArrowUpShort } from "react-icons/bs";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-full h-auto bg-dark mt-16 pb-5">
            <div className="border-t-2 border-gold relative">
                <span className="duration-200 absolute bg-dark hover:bg-gold hover:text-dark border-2 border-gold p-1 -top-5 left-[50%] cursor-pointer">
                    <BsArrowUpShort size={28} />
                </span>
            </div>
            <div className="mt-16 lg:max-w-7xl xl:max-w-[1400px] mx-auto">
                <div className="grid grid-cols-7">
                    <div className="col-span-2">
                        <h4 className="text-xl font-bold text-gold mb-5">
                            {process.env.NEXT_PUBLIC_APP_TITLE || "Metin2 Next.JS app developed by TheoDoR"}
                        </h4>
                        <p className="text-light text-sm">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam aspernatur eaque quo,
                            praesentium facilis nesciunt maiores ea quidem quia, officiis dolorum fuga aliquid modi
                            eius.
                        </p>
                    </div>
                    <div className="col-start-4">
                        <h4 className="text-xl font-bold text-gold mb-5">Pages</h4>
                        <ul>
                            <li className="duration-200 hover:text-gold">
                                <Link href="/">Download</Link>
                            </li>
                            <li className="duration-200 hover:text-gold">
                                <Link href="/">Ranking</Link>
                            </li>
                            <li className="duration-200 hover:text-gold">
                                <Link href="/">Item-Shop</Link>
                            </li>
                            <li className="duration-200 hover:text-gold">
                                <Link href="/">Login</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-gold mb-5">Social</h4>
                        <ul>
                            <li className="duration-200 hover:text-gold">
                                <Link href="/">Facebook</Link>
                            </li>
                            <li className="duration-200 hover:text-gold">
                                <Link href="/">Youtube</Link>
                            </li>
                            <li className="duration-200 hover:text-gold">
                                <Link href="/">Twitter</Link>
                            </li>
                            <li className="duration-200 hover:text-gold">
                                <Link href="/">Tiktok</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-gold mb-5">Others</h4>
                        <ul>
                            <li className="duration-200 hover:text-gold">
                                <Link href="/">Rules</Link>
                            </li>
                            <li className="duration-200 hover:text-gold">
                                <Link href="/">Wikipedia</Link>
                            </li>
                            <li className="duration-200 hover:text-gold">
                                <Link href="/">Game guide</Link>
                            </li>
                            <li className="duration-200 hover:text-gold">
                                <Link href="/">Server preview</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-gold mb-5">Contact</h4>
                        <ul>
                            <li className="duration-200 hover:text-gold">
                                <Link href="/">Discord</Link>
                            </li>
                            <li className="duration-200 hover:text-gold">
                                <Link href="/">Email</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="text-center mt-10">
                <span className="text-xs">
                    Copyright by{" "}
                    <Link href="/">
                        {process.env.NEXT_PUBLIC_APP_TITLE || "Metin2 Next.JS app developed by TheoDoR"}
                    </Link>
                    . All rights are reserved. <br />
                    App developed by{" "}
                    <Link target="_blank" href="https://theodor.work">
                        TheoDoR
                    </Link>
                    .
                </span>
            </div>
        </footer>
    );
};

export default Footer;
