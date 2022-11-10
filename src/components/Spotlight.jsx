import React, { useEffect } from "react";

const Spotlight = ({ handleSpotlightClick }) => {
    useEffect(() => {
        const spotlight = document.querySelector(".spotlight");
        let spotlightSize = "transparent 160px, rgba(0, 0, 0, 0.85) 200px)";

        window.addEventListener("mousemove", (e) => updateSpotlight(e));

        const updateSpotlight = (e) => {
            spotlight.style.backgroundImage = `radial-gradient(circle at ${(e.pageX / window.innerWidth) *
                100}% ${(e.pageY / window.innerHeight) * 100}%, ${spotlightSize}`;
        };
    }, []);

    return (
        <div className='spot-focus-container'>
            <div className='spotlight'></div>
            <div className='message' onClick={handleSpotlightClick}>
                <div>Remember that you'll find me beside you</div>
                <div>to give you a shoulder to cry on</div>
                <div>and behind you,</div>
                <div>supporting you</div>
                <div>while you work on your dreams and goals</div>
            </div>
        </div>
    );
};

export default Spotlight;
