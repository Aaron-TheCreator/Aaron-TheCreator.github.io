import React from "react";
import SmashKarts from "./games/SmashKarts";
import HighwayRacer from "./games/HighwayRacer";
import { useSelector } from "react-redux";

const GameLauncher = () => {
    const page = useSelector((state) => state.page);

    return (
        <div className="fw-content game">
            {page === "SmashKarts.io" && <SmashKarts />}
            {page === "Highway Racer 3D" && <HighwayRacer />}
        </div>
    )
};

export default GameLauncher;