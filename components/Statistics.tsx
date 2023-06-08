import React, { useEffect, useState } from "react";
import Link from "next/link";
import { IoMdDownload } from "react-icons/io";
import { ImWikipedia } from "react-icons/im";
import { MdQuestionMark } from "react-icons/md";
import fetcher from "@/helpers/fetcher";

const Statistics = () => {
    const [playersOnline, setPlayersOnline] = useState(0);
    const [playersOnline24Hours, setPlayersOnline24Hours] = useState(0);

    useEffect(() => {
        const fetchPlayersOnline = async () => {
            try {
                const getPlayersOnline = await fetcher("/api/playersOnline");

                setPlayersOnline(getPlayersOnline.playersOnline);
                setPlayersOnline24Hours(getPlayersOnline.playersOnline24Hours);
            } catch (error) {
                console.log("Players Online: fetching error -> ", error);
                setPlayersOnline(0);
                setPlayersOnline24Hours(0);
            }
        };

        fetchPlayersOnline();

        const autoRefresh = setInterval(fetchPlayersOnline, 30 * 1000);

        return () => clearInterval(autoRefresh);
    }, []);

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
                    <span className="text-gold text-sm">{Number(playersOnline).toLocaleString()}</span>
                    Players online
                </div>
                <div className="py-4 bg-dark2 flex flex-col items-center text-white font-bold text-xl uppercase">
                    <span className="text-gold text-sm">{Number(playersOnline24Hours).toLocaleString()}</span>
                    Players online (24h)
                </div>
            </div>
        </>
    );
};

export default Statistics;
