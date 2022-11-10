import React from "react";

const FlipCards = ({ msg, flipCount, handleCardClick }) => {
    return (
        <div className='card-container'>
            <div className={flipCount % 2 === 0 ? "card front" : "card back"} onClick={handleCardClick}>
                <span>{msg[flipCount]}</span>
            </div>
        </div>
    );
};

export default FlipCards;
