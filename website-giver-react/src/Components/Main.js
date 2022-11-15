import React from 'react'
import Websites from './Websits'
import About from './about'
import Games from './Games';
import Contact from './Contact';
import './Style/res.css';

const Main = (props) => {
    if (props.theme==="Website") {
        document.title = "WebsiteGiver.com | Home"
        return(<Websites progress={props.progress}/>)
    }else if (props.theme==="Games"){
        document.title = "WebsiteGiver.com | Games"
        return(<Games progress={props.progress}/>)
    }else if (props.theme==="About") {
        document.title = "WebsiteGiver.com | About"
        return(<About progress={props.progress}/>)
    }else if (props.theme==="Contact") {
        document.title = "WebsiteGiver.com | Contact"
        return(<Contact progress={props.progress}/>)
    }
}

export default Main