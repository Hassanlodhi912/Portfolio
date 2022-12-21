import React from 'react'
import Toggle from '../toggle/Toggle';
import "./Header.css";
import { Link } from 'react-scroll';
const Header = () => {
    return (
        <div className="h-wrapper">
            <div className="h-left">
                <div className="h-name">
                    <Toggle />
                </div>
            </div>
            <div className="h-right">
                <div className="h-list">
                    <ul style={{ listStyleType: "none" }} >
                        <Link activeClass="active" spy={true} smooth={true} to="Header" >
                            <li>Home</li>
                        </Link>
                        <Link activeClass="active" spy={true} smooth={true} to="Services" >

                            <li>Services</li>
                        </Link>
                        <Link activeClass="active" spy={true} smooth={true} to="Skills" >

                            <li>Skills</li>
                        </Link>

                        <Link activeClass="active" spy={true} smooth={true} to="Portfolio" >

                            <li>Portfolio</li>
                        </Link>
                        <Link activeClass="active" spy={true} smooth={true} to="Contact" >

                            <li>Contact</li>
                        </Link>


                    </ul>
                </div>
            </div>
            <Link to="Contact" spy={true} smooth={true}>
        <button className="button n-button">Contact</button>
        </Link>
        </div>
    )
}

export default Header;
