import React from 'react'
import Toggle from '../toggle/Toggle';
import "./Header.css";
import {Link} from 'react-scroll';

const Header = () => {
    return (
        <div className="h-wrapper">
            <div className="h-left">
                <div className="h-name">Hassan</div>
                <Toggle/>

            </div>
            <div className="h-right">
                <div className="h-list">
                    <ul style={{listStyleType:"none"}}>
                       <Link spy={true} smooth={true} to="Header" >
                        <li>Home</li>
                        </Link>
                       <Link spy={true} smooth={true} to="Services" >

                        <li>Services</li>
                        </Link>
                        <Link spy={true} smooth={true} to="Experience" >

                        <li>Experience</li>
                        </Link>

                       <Link spy={true} smooth={true} to="Portfolio" >

                        <li>Portfolio</li>
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
