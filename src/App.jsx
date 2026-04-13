import {useState} from "react";
import LightBulb from "./components/Lightbulb.jsx";

function App() {
    const [isLightOn, setIsLightOn] = useState(false);
    const [hasToggled, setHasToggled] = useState(false);
    const [animKey, setAnimKey] = useState(0);

    function handleSwitch() {
        setHasToggled(true);
        setIsLightOn(prev => !prev);
        setAnimKey(prev => prev + 1);
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
                key={animKey}
                className={`screen ${isLightOn ? "light-on" : hasToggled ? "light-off" : "light-idle"}`}
                style={{ color: isLightOn ? "#1f2937" : "#f9fafb" }}
            >
                <LightBulb isOn={isLightOn} />
            </div>
        </div>
    )
}

export default App;