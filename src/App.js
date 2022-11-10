import "./App.css";
import React, { useState } from "react";
import FlipCards from "./components/FlipCards";
import HoverFocus from "./components/Spotlight";
import Reveal from "./components/Reveal";

function App() {
    const [reveal, setReveal] = useState(false);
    const [flipCount, setFlipCount] = useState(0);
    const MESSAGE = [
        "Hi Bubs",
        "I know everything's been hard these days for you.",
        "It might be overwhelming.",
        "But don't be too hard on yourself.",
        "Even if it feels like the world is against you",
        "and everything is dark and hopeless",
    ];

    const handleCardClick = () => {
        setFlipCount((prev) => prev + 1);
    };

    const handleSpotlightClick = () => {
        setReveal(true);
    };

    return (
        <div className='App'>
            {flipCount < MESSAGE.length ? (
                <FlipCards msg={MESSAGE} flipCount={flipCount} handleCardClick={handleCardClick} />
            ) : (
                <>{!reveal ? <HoverFocus handleSpotlightClick={handleSpotlightClick} /> : <Reveal />}</>
            )}
        </div>
    );
}

export default App;
