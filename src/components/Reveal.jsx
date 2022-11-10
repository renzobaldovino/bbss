import React from "react";

const Reveal = () => {
    const MESSAGE = [
        {
            left: "for now,",
            right: "take care of yourself",
        },
        {
            left: "take some time off to rest,",
            right: "do the things you enjoy",
        },
        {
            left: "even for a little while",
            right: "before going back to work",
        },
        {
            left: "and if you need anything,",
            right: "tell me",
        },
        {
            left: "I'll always be there for you,",
            right: "to hear you out and help you",
        },
    ];

    return (
        <div className='pillar-container'>
            <div className='pillar'>
                {MESSAGE.map((msg) => {
                    return (
                        <div class='row'>
                            <div class='wrap'>
                                <div class='left'>{msg.left}</div>
                                <div class='right'>{msg.right}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className='ily'>{"i love you so much :>"}</div>
        </div>
    );
};

export default Reveal;
