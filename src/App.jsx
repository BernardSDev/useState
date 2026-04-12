import {useState} from "react";

function App() {
    const [isLightOn, setIsLightOn] = useState(false);

    function handleSwitch() {
        setIsLightOn(!isLightOn);
    }

    return (
        <div className="main-container">
            <div className="control">
                <h1 className="control-heading">
                    Understanding useState: Turning UI Elements On and Off
                </h1>
                <p className="control-subheading">
                    Learn how React state controls visibility by building simple show and hide (toggle) screens in
                    real-world interfaces.
                </p>
                <button
                    onClick = { handleSwitch }
                    style={{ backgroundColor: isLightOn ? "#22c55e" : "#B47753", color: "white" }}
                    className="control-button"
                >
                    { isLightOn ? "Switch off" : "Switch on" }
                </button>
            </div>
            <div
                className="screen"
                style={{
                    background: isLightOn ? "#fff7c2" : "#111827",
                    color: isLightOn ? "#1f2937" : "#f9fafb",
                }}
            >
                { isLightOn ? <h1>Light is On</h1> : <h1>Light is Off</h1> }
            </div>
        </div>
    )
}

export default App;