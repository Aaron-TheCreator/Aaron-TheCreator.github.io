import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updatePage } from "../services/actions";
import "../css/Sidebar.css";

// Images
import smashKartsIcon from "../images/smashkarts.webp"
import highwayRacerIcon from "../images/highwayracer3dicon.jpeg"


const GameSidebar = () => {
    const page = useSelector((state) => state.page);
    const dispatch = useDispatch();

    const handleChange = (newPage) => {
        dispatch(updatePage(newPage));
    };
    return (
        <div className="sb-root">
            <div className={`sb-item ${page === "SmashKarts.io" && "active"}`}>
                <button style={{background: "#222b33", color: "white"}} onClick={() => handleChange("SmashKarts.io")}>
                    <img style={{height: "100%", width: "80%", borderRadius: "25%"}}src={smashKartsIcon} alt="Smash Karts game" />
                    SmashKarts
                </button>
            </div>
            <div className={`sb-item ${page === "Highway Racer 3D" && "active"}`}>
            <button style={{background: "#222b33", color: "white"}} onClick={() => handleChange("Highway Racer 3D")}>
                    <img style={{height: "100%", width: "80%", borderRadius: "25%"}} src={highwayRacerIcon} alt="Smash Karts game" />
                    Highway<br/>Racer3D
                </button>
            </div>
        </div>
  );
};

export default GameSidebar;