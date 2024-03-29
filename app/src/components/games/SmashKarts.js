import React from "react";
import "../../css/Game.css";

const SmashKarts = () => {
    return (
        <div className="gameFrame">
            <iframe 
                title="Smash Karts" 
                src="https://smashkarts.io/"
                style={{
                position: "relative", 
                top:0, 
                left:0, 
                bottom:0, 
                right:0, 
                height:"90%", 
                width:"100%", 
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

export default SmashKarts;