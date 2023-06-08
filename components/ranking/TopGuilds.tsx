import React, { useEffect, useState } from "react";
import Title from "../elements/Title";
import fetcher from "@/helpers/fetcher";

interface RankingParams {
    name: string;
    level: number;
    ladder_point: number;
}

const TopGuilds = () => {
    const [topGuilds, setTopGuilds] = useState<RankingParams[]>([]);

    useEffect(() => {
        const fetchGuilds = async () => {
            try {
                const response = await fetcher("/api/topGuilds");
                const data = response.map((guild: RankingParams) => ({
                    name: guild.name,
                    level: guild.level,
                    ladder_point: guild.ladder_point,
                }));

                setTopGuilds(data);
            } catch (error) {
                console.log("Guilds: fetching errors -> ", error);
            }
        };

        fetchGuilds();
    }, []);

    const topThree = (top: number) => {
        switch (top) {
            case 1:
                return <span className="font-extrabold text-gold text-2xl">{top}</span>;
            case 2:
                return <span className="font-bold text-gold/80 text-xl">{top}</span>;
            case 3:
                return <span className="font-semibold text-gold/60 text-lg">{top}</span>;

            default:
                return <span className="font-normal">{top}</span>;
        }
    };

    return (
        <div>
            <Title label="Top 5 Guilds" className="bg-dark2 px-5 py-2 border-t-2 border-gold mb-1" />

            <table className="w-full mt-1 text-center">
                <thead className="w-full bg-dark2">
                    <tr>
                        <th scope="col" className="py-2 px-8">
                            No.
                        </th>
                        <th scope="col" className="py-2 px-8">
                            Name
                        </th>
                        <th scope="col" className="py-2 px-8">
                            Level
                        </th>
                        <th scope="col" className="py-2 px-8">
                            Points
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {topGuilds.map(({ name, level, ladder_point }, idx) => (
                        <tr
                            key={idx}
                            className="transition duration-300 ease-in-out bg-dark2 hover:bg-gold/20 border-b-2 border-dark first-of-type:border-t-2"
                        >
                            <td className="whitespace-nowrap px-8 py-2 font-medium">{topThree(idx + 1)}</td>
                            <td className="whitespace-nowrap px-8 py-2">{name}</td>
                            <td className="whitespace-nowrap px-8 py-2">{level}</td>
                            <td className="whitespace-nowrap px-8 py-2">{ladder_point}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TopGuilds;
