/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect } from 'react'

function Elements(props) {
    function readingTime() {
        const text = props.description;
        const wpm = 60;
        const words = text.trim().split(/\s+/).length;
        const time = Math.ceil(words / wpm);
        return time
    }

    useEffect(() => {
        // Update the document title using the browser API

        let coll = document.getElementById(`collapse-${props.id}`);
        coll.addEventListener("click", function () {
            coll.classList.toggle("active");
            var content = coll.nextElementSibling;
            if (content.style.display === "block") {
                content.style.height = "0%";
                content.style.display = "none";
            } else {
                content.style.height = "100%";
                content.style.display = "block";
            }
        });
    });

    return (
        <>
            <div className="collaps-links">
                <div className="temp flex flex-collem">
                    <button className="flex align-center collapse" id={"collapse-" + props.id}>
                        <img height="15px" width="15px" src="https://lakshyakumar266.github.io/Website-Giver/static/images/ico-plus.png" alt="" />
                        <h3 >{props.title}</h3>
                    </button>

                    <div className="data-hande">
                        <a target="_blank" href={props.url}>
                            <h2 >{props.title}</h2>
                        </a>
                        <p className="para">{props.description}</p>
                        <p className="author">Author - lakshya Kumar(programer)</p>
                        <p className="date">Published on {props.date} | {readingTime()}min read</p>
                    </div>
                </div >
            </div >
        </>
    )
}

export default Elements