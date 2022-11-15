/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from 'react'
import Elements from './elements';
import Intro from './Intro'

import './Style/res.css';

const Websits = (props) => {
    const [websites, setwebsites] = useState([])
    useEffect(() => {
        props.progress(50)
        fetch('http://localhost:3020/websites')
            .then((response) =>
                response.json()
            )
            .then((data) =>
                setwebsites(data)
            )
        props.progress(100)
    }, [props])

    return (
        <div>
            <Intro theme="home" />
            <div className="templates m-auto">
                <h1>Templates:</h1>
                {websites.map((element, i) => (
                    <Elements key={i} title={element.title} description={element.description} url={element.link} date={element.datetime} id={element._id} />
                ))}
            </div>
        </div>
    )
}

export default Websits
