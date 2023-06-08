import React from "react";
import Title from "./elements/Title";
import Link from "next/link";
import Login from "./Login";
import GenHash from "./test/GenHash";

const News = () => {
    return (
        <>
            <div className="grid grid-cols-3 gap-10">
                <div className="col-span-2">
                    <Title label="News" className="bg-dark2 px-5 py-2 border-t-2 border-gold mb-5" />

                    <div className="grid grid-cols-6 mt-2">
                        <div className="bg-dark2 bg-[url('/images/news-avatar.png')] bg-cover w-full h-28 relative">
                            <div className="absolute bg-dark top-0 left-0 w-full h-full bg-dark/60">
                                <div className="h-28 flex flex-col justify-center items-center font-bold text-lg uppercase">
                                    <span>12</span>
                                    <span>May</span>
                                    <span className="text-xs font-semibold mt-5">at 4:04 PM</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-dark2 col-span-4 px-5 py-2">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, delectus nihil officiis vero
                            ea voluptate veniam nobis illo? Explicabo, cupiditate consequuntur excepturi dolorum quos
                            enim ...
                        </div>
                        <Link
                            className="bg-gold text-dark flex justify-center items-center text-lg font-bold uppercase"
                            href="/"
                        >
                            Read more
                        </Link>
                    </div>

                    <div className="grid grid-cols-6 mt-2">
                        <div className="bg-dark2 bg-[url('/images/news-avatar.png')] bg-cover w-full h-28 relative">
                            <div className="absolute bg-dark top-0 left-0 w-full h-full bg-dark/60">
                                <div className="h-28 flex flex-col justify-center items-center font-bold text-lg uppercase">
                                    <span>12</span>
                                    <span>May</span>
                                    <span className="text-xs font-semibold mt-5">at 4:04 PM</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-dark2 col-span-4 px-5 py-2">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, delectus nihil officiis vero
                            ea voluptate veniam nobis illo? Explicabo, cupiditate consequuntur excepturi dolorum quos
                            enim ...
                        </div>
                        <Link
                            className="bg-gold text-dark flex justify-center items-center text-lg font-bold uppercase"
                            href="/"
                        >
                            Read more
                        </Link>
                    </div>

                    <div className="grid grid-cols-6 mt-2">
                        <div className="bg-dark2 bg-[url('/images/news-avatar.png')] bg-cover w-full h-28 relative">
                            <div className="absolute bg-dark top-0 left-0 w-full h-full bg-dark/60">
                                <div className="h-28 flex flex-col justify-center items-center font-bold text-lg uppercase">
                                    <span>12</span>
                                    <span>May</span>
                                    <span className="text-xs font-semibold mt-5">at 4:04 PM</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-dark2 col-span-4 px-5 py-2">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, delectus nihil officiis vero
                            ea voluptate veniam nobis illo? Explicabo, cupiditate consequuntur excepturi dolorum quos
                            enim ...
                        </div>
                        <Link
                            className="bg-gold text-dark flex justify-center items-center text-lg font-bold uppercase"
                            href="/"
                        >
                            Read more
                        </Link>
                    </div>
                </div>
                <div>
                    <Login />
                    {process.env.NEXT_PUBLIC_APP_ENV === "development" && <GenHash />}
                </div>
            </div>
        </>
    );
};

export default News;
