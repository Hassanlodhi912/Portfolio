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
                    <ul >
                        <Link spy={true} smooth={true} to="Header" >
                            <li>Home</li>
                        </Link>
                        <Link spy={true} smooth={true} to="Services" >

                            <li>Services</li>
                        </Link>
                        <Link spy={true} smooth={true} to="Skills" >

                            <li>Skills</li>
                        </Link>

                        <Link spy={true} smooth={true} to="Portfolio" >

                            <li>Portfolio</li>
                        </Link>
                        <Link spy={true} smooth={true} to="Contact" >

                            <li>Contact</li>
                        </Link>


                    </ul>
                </div>
            </div>
            <button className="button">
                Contact us
            </button>
        </div>
    )
}

export default Header;
