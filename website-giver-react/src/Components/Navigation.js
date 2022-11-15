/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from "react-router-dom";

import './Style/style.css';
import './Style/utils.css';
import './Style/res.css';

const Navigation = () => {
    return (
        <nav>
            <div className="navigation flex flex-center" id="navigation">
                <div className="logo">
                    <Link to="/">
                        <img src="https://lakshyakumar266.github.io/Website-Giver/static/images/logoprev.png" alt="Logo" />
                    </Link>
                </div>
                <div className="hamburger">
                    <a>
                        <i className="fa fa-bars"></i>
                    </a>
                </div>
                <ul className="flex" id="navul">
                    <li className="scroll"><Link to="/" className="links">Home</Link></li>
                    <li className="scroll"><Link to="/games" className="links">Games</Link></li>
                    <li className="scroll"><Link to="/about" className="links">About</Link></li>
                    <li className="scroll"><Link to="/contact" className="links">Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation