import React from "react";
import Link from "next/link";
import { IoMdDownload } from "react-icons/io";
import { ImWikipedia } from "react-icons/im";
import { MdQuestionMark } from "react-icons/md";

const Statistics = () => {
    return (
        <>
            <div className="grid grid-cols-5">
                <Link
                    href="/download"
                    className="py-4 bg-gold flex flex-col items-center text-dark font-bold text-xl uppercase duration-200 hover:shadow-md hover:shadow-gold"
                >
                    <IoMdDownload />
                    Download
                </Link>
                <Link
                    href="/download"
                    className="py-4 bg-dark2 flex flex-col items-center text-white font-bold text-xl uppercase duration-200 hover:shadow-md hover:shadow-white"
                >
                    <ImWikipedia />
                    Wikipedia
                </Link>
                <Link
                    href="/download"
                    className="py-4 bg-dark2 flex flex-col items-center text-white font-bold text-xl uppercase duration-200 hover:shadow-md hover:shadow-white"
                >
                    <MdQuestionMark />
                    Support
                </Link>
                <div className="py-4 bg-dark2 flex flex-col items-center text-white font-bold text-xl uppercase">
                    <span className="text-gold text-sm">{Number("123456789").toLocaleString()}</span>
                    Players online
                </div>
                <div className="py-4 bg-dark2 flex flex-col items-center text-white font-bold text-xl uppercase">
                    <span className="text-gold text-sm">{Number("123456789").toLocaleString()}</span>
                    Players online (24h)
                </div>
            </div>
        </>
    );
};

export default Statistics;
