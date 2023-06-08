import React, { useEffect, useState } from "react";
import Title from "@/components/elements/Title";
import fetcher from "@/helpers/fetcher";
import Image from "next/image";

interface RankingParams {
    name: string;
    job: number;
    level: number;
    empire: number;
}

const TopPlayers = () => {
    const [topPlayers, setTopPlayers] = useState<RankingParams[]>([]);

    const getEmpireImage = (empire: number) => {
        switch (empire) {
            case 1:
                return (
                    <Image
                        src="/images/empire/1.png"
                        alt="Sinshoo Empire"
                        width="100"
                        height="100"
                        className="h-6 w-12"
                    />
                );
            case 2:
                return (
                    <Image
                        src="/images/empire/2.png"
                        alt="Chujo Empire"
                        width="100"
                        height="100"
                        className="h-6 w-12"
                    />
                );
            case 3:
                return (
                    <Image
                        src="/images/empire/3.png"
                        alt="Jinno Empire"
                        width="100"
                        height="100"
                        className="h-6 w-12"
                    />
                );
            default:
                return (
                    <Image
                        src="/images/empire/unknown.png"
                        alt="Unknown Empire"
                        width="100"
                        height="100"
                        className="h-8 w-16"
                    />
                );
        }
    };

    const getJobImage = (job: number) => {
        switch (job) {
            case 0:
                return (
                    <Image src="/images/job/0.png" alt="Warrior Male" width="100" height="100" className="h-8 w-8" />
                );
            case 1:
                return (
                    <Image src="/images/job/5.png" alt="Assassin Woman" width="100" height="100" className="h-8 w-8" />
                );
            case 2:
                return <Image src="/images/job/2.png" alt="Sura Male" width="100" height="100" className="h-8 w-8" />;
            case 3:
                return (
                    <Image src="/images/job/7.png" alt="Shaman Woman" width="100" height="100" className="h-8 w-8" />
                );
            case 4:
                return (
                    <Image src="/images/job/4.png" alt="Warrior Woman" width="100" height="100" className="h-8 w-8" />
                );
            case 5:
                return (
                    <Image src="/images/job/1.png" alt="Assassin Male" width="100" height="100" className="h-8 w-8" />
                );
            case 6:
                return <Image src="/images/job/6.png" alt="Sura Woman" width="100" height="100" className="h-8 w-8" />;
            case 7:
                return <Image src="/images/job/3.png" alt="Shaman Male" width="100" height="100" className="h-8 w-8" />;
            default:
                return (
                    <Image
                        src="/images/job/unknown.png"
                        alt="Unknown Job"
                        width="100"
                        height="100"
                        className="h-8 w-16"
                    />
                );
        }
    };

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

    useEffect(() => {
        const fetchPlayers = async () => {
            try {
                const response = await fetcher("/api/topPlayers");
                const data = response.map((player: RankingParams) => ({
                    name: player.name,
                    job: player.job,
                    level: player.level,
                    empire: player.empire,
                }));

                setTopPlayers(data);
            } catch (error) {
                console.log("Players: fetching errors -> ", error);
            }
        };

        fetchPlayers();
    }, []);

    return (
        <div>
            <Title label="Top 5 Players" className="bg-dark2 px-5 py-2 border-t-2 border-gold mb-1" />

            <table className="w-full mt-1 text-center">
                <thead className="w-full bg-dark2">
                    <tr>
                        <th scope="col" className="py-2 px-8">
                            No.
                        </th>
                        <th scope="col" className="py-2 px-8">
                            Race
                        </th>
                        <th scope="col" className="py-2 px-8">
                            Name
                        </th>
                        <th scope="col" className="py-2 px-8">
                            Level
                        </th>
                        <th scope="col" className="py-2 px-8">
                            Empire
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {topPlayers.map(({ job, name, level, empire }, idx) => (
                        <tr
                            key={idx}
                            className="transition duration-300 ease-in-out bg-dark2 hover:bg-gold/20 border-b-2 border-dark first-of-type:border-t-2"
                        >
                            <td className="whitespace-nowrap px-8 py-2 font-medium">{topThree(idx + 1)}</td>
                            <td className="whitespace-nowrap px-8 py-2">{getJobImage(job)}</td>
                            <td className="whitespace-nowrap px-8 py-2">{name}</td>
                            <td className="whitespace-nowrap px-8 py-2">{level}</td>
                            <td className="whitespace-nowrap px-8 py-2">{getEmpireImage(empire)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TopPlayers;
