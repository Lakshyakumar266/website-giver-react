/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

import './Style/res.css';
import './Style/utils.css';

const Intro = (props) => {
    const mystyle = {
        borderBottom: "1px solid black"
    }
    if (props.theme === "home") {
        return (
            <>
                <div className="welcome-fold m-auto">
                    <h1>Welcome To:</h1>
                    <div className="flex">
                        <div className="front">
                            <img src="https://lakshyakumar266.github.io/Website-Giver/static/images/logoprev.png" />
                        </div>
                        <div className="flex flex-collem">
                            <h3> Get the Best Templates madded By Me: </h3>
                            <p>A web developer is a programmer who specializes in, or is specifically engaged in, the
                                development of World Wide Web applications using a client–server model. The applications
                                typically use HTML, CSS and JavaScript in the client, PHP, ASP.NET (C#), Python, Go or Java in
                                the server, and http for communications between client and server. A web content management
                                system is often used to develop and maintain web applications.</p>
                            <div style={mystyle}></div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    else if (props.theme === "games") {
        return (<>
            <div className="welcome-fold welcome-fold-games m-auto">
                <h1>It's Your:</h1>
                <div className="flex">
                    <div className="front">
                        <img src="https://lakshyakumar266.github.io/Website-Giver/static/images/game-maker-logo.png" alt="" />
                    </div>
                    <div className="flex flex-collem">
                        <h3> Game Maker And You Gan Get The Games made By Me: </h3>
                        <p>A contemporary video game may include advanced physics, artificial intelligence, 3D graphics,
                            digitised sound, an original musical score, complex strategy and may use several input devices
                            (such as mice, keyboards, gamepads and joysticks) and may be playable against other people via
                            the Internet or over a LAN. Each aspect of the game can consume all of one programmer's time
                            and, in many cases, several programmers. Some programmers may specialize in one area of game.
                        </p>
                        <div style={{ borderBottom: "1px solid black" }}></div>
                    </div>
                </div>
            </div>)
        </>)
    }
}

export default Intro
