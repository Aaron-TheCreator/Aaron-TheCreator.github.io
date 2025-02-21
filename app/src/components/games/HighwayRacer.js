import React from "react";
import "../../css/Game.css";

const HighwayRacer = () => {
    return (
        <div className="gameFrame">
            <iframe 
                title="Pinball" 
                src="https://alula.github.io/SpaceCadetPinball/"
                style={{
                position: "relative", 
                top:0, 
                left:45, 
                bottom:0, 
                right:0, 
                height:"100%", 
                width:"80%", 
                margin:0, 
                padding:0,
                borderColor: "#1d252b", 
                overflow: "hidden", 
                zIndex:999999
                }}
            >
                Your browser doesn't support iframes
            </iframe>
        </div>
    )
};

export default HighwayRacer;
