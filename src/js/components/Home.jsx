import React, { useState } from "react";
import "../../index.css";

const TrafficLight = () => {
    const [color, setColor] = useState("red");

    return (
        <div className="d-flex flex-column align-items-center mt-4">
            <div className="bg-dark p-3 rounded">
                <div
                    className={`light red ${color === "red" ? "glow" : ""}`}
                    onClick={() => setColor("red")}
                ></div>
                <div
                    className={`light yellow ${color === "yellow" ? "glow" : ""}`}
                    onClick={() => setColor("yellow")}
                ></div>
                <div
                    className={`light green ${color === "green" ? "glow" : ""}`}
                    onClick={() => setColor("green")}
                ></div>
            </div>
        </div>
    );
};

export default TrafficLight;

