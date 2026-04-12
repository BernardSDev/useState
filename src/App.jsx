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
                    className="control-button"
                >
                    Switch on
                </button>
            </div>
            <div className="screen">
                { isLightOn ? <h1>Light is On</h1> : <h1>Light is Off</h1> }
            </div>
        </div>
    )
}

export default App;