import React, { useState, useEffect } from 'react'
import "./Style/games.css"
import Intro from './Intro'
import Elements from './elements'



export default function Games(props) {
    const [games, setgames] = useState([])
    useEffect(() => {
        props.progress(50)
        fetch('http://localhost:3020/games')
        .then(response => response.json())
        .then((data) => setgames(data))
        props.progress(100)
    }, [props])
    return (
        <>
            <Intro theme="games" />

            <div className="games m-auto">
                <h1>Our Games:</h1>
                {games.map((element, i) => (
                    <Elements key={i} title={element.title} description={element.description} url={element.link} date={element.datetime} id={element._id} />
                ))}
            </div>
        </>
    )
}
