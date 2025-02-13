import React, { useState } from "react";

const ToggleSwitch = () => {
    const [isOn, setIsOn] = useState(false);

    const handleToggleSwitch = () => {
        setIsOn(!isOn);
    };

    const buttonStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: isOn ? "flex-end" : "flex-start",
        backgroundColor: isOn ? "green" : "red",
        color: "white",
        padding: "10px",
        minWidth: "120px",
        maxWidth: "200px",
        borderRadius: "50px",
        cursor: "pointer",
        transition: "all 0.5s ease",
    };

    const textStyle = {
        border: "2px solid white",
        padding: "6px 12px",
        borderRadius: "50%",
        backgroundColor: "white",
        color: isOn ? "green" : "red",
        fontWeight: "bold",

    };

    return (
        <>
            <h1 style={{ textAlign: "center" }}>Toggle Switch</h1>

            <div
                className="toggle"
                style={buttonStyle}
                onClick={handleToggleSwitch}
            >
                <span className="switch-state" style={textStyle}>
                    {isOn ? "ON" : "OFF"}

                </span>
            </div>
        </>
    );
};

export default ToggleSwitch;
