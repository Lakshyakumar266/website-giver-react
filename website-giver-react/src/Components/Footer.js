import React from 'react'

import {
    Link
} from "react-router-dom";

import './Style/style.css';
import './Style/utils.css';
import './Style/res.css';

const Footer = () => {
    return (
        <>
            <div className="up">
                <Link to="/">
                    <div className="top">
                        <i className="fa fa-chevron-up"></i>
                    </div>
                </Link>
            </div>

            <footer className="flex-center">
                Copyright &copy; all Rights reserved &#8205; <span id="year-holder">{new Date().getUTCFullYear()}</span>
                &#8205; &#8205; | &#8205; &#8205;
                {/* Images Copyright */}
                Vector Images From <a href="https://www.freepik.com/vectors" target="_blank" rel="noreferrer" style={{textDecoration: "none"}}>freepik.com</a>
            </footer>
        </>
    )
}

export default Footer
