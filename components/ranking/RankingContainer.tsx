import React from "react";
import TopPlayers from "./TopPlayers";
import TopGuilds from "./TopGuilds";

const RankingContainer = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5 lg:mt-10">
            <TopPlayers />
            <TopGuilds />
        </div>
    );
};

export default RankingContainer;
